"use strict";

// Geometry and topic interaction adapted from Typography Learning.
const get = (id) => document.getElementById(id);
const compactMap = matchMedia("(max-width: 700px)");
const lesson = get("lesson");
let mapWidth;
let mapHeight;
let activeButton;

function buildMap(compact) {
  const nodes = [];
  const edges = [];
  let previous;
  let top = compact ? 18 : 48;

  roadmapGroups.forEach((group, stage) => {
    const rows = Math.ceil(group.terms.length / 2);
    const height = compact
      ? group.terms.length * 54
      : Math.max(120, rows * 44 + 12);
    const main = {
      ...group,
      id: "group-" + group.id,
      stage,
      main: true,
      x: compact ? 9 : 380,
      y: top + height / 2 - 19,
      w: compact ? 163 : 240,
      h: 38,
    };
    nodes.push(main);
    if (previous) edges.push({ from: previous, to: main, kind: "spine" });
    previous = main;

    group.terms.forEach((term, index) => {
      const left = !compact && index < rows;
      const row = compact || left ? index : index - rows;
      const node = {
        ...term,
        stage,
        x: compact ? 212 : left ? 25 : 695,
        y: top + row * (compact ? 54 : 44),
        w: compact ? 176 : 280,
        h: compact ? 46 : 38,
      };
      nodes.push(node);
      edges.push({ from: main, to: node, kind: "branch", left });
    });
    top += height + (compact ? 28 : 66);
  });
  return {
    nodes,
    edges,
    width: compact ? 400 : 1000,
    height: top - (compact ? 18 : 30),
  };
}

function topicButton(node) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = node.main ? "node main-node" : "node";
  button.dataset.id = node.id;
  button.textContent = node.title;
  Object.assign(button.style, {
    left: node.x + "px",
    top: node.y + "px",
    width: node.w + "px",
    height: node.h + "px",
  });
  button.addEventListener("click", () => openTopic(node, button));
  return button;
}

function connector({ from, to, kind, left }) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  if (kind === "spine") {
    const x = from.x + from.w / 2;
    path.setAttribute("d", `M ${x} ${from.y + from.h} V ${to.y}`);
  } else {
    const x = left ? from.x : from.x + from.w;
    const end = left ? to.x + to.w : to.x;
    const y = from.y + from.h / 2;
    const targetY = to.y + to.h / 2;
    const midpoint = (x + end) / 2;
    path.setAttribute(
      "d",
      `M ${x} ${y} C ${midpoint} ${y}, ${midpoint} ${targetY}, ${end} ${targetY}`,
    );
  }
  path.setAttribute("class", "connector " + kind);
  return path;
}

function fitMap() {
  const scale = Math.min(1, get("mapScroll").clientWidth / mapWidth);
  get("map").style.transform = `scale(${scale})`;
  get("mapSizer").style.width = mapWidth * scale + "px";
  get("mapSizer").style.height = mapHeight * scale + "px";
}

function renderMap() {
  const { nodes, edges, width, height } = buildMap(compactMap.matches);
  mapWidth = width;
  mapHeight = height;
  get("map").className = "map";
  get("map").style.width = width + "px";
  get("map").style.height = height + "px";
  get("connections").setAttribute("viewBox", `0 0 ${width} ${height}`);
  get("connections").replaceChildren(...edges.map(connector));
  const focusedId = document.activeElement?.dataset.id;
  get("nodes").replaceChildren(...nodes.map(topicButton));
  if (focusedId)
    get("nodes")
      .querySelector(`[data-id="${focusedId}"]`)
      ?.focus({ preventScroll: true });
  fitMap();
}

function openTopic(node, button) {
  activeButton = button;
  get("lessonStage").textContent = roadmapGroups[node.stage].title;
  get("lessonTitle").textContent = node.title;
  get("definition").textContent = node.definition;
  get("example").textContent = node.example;
  get("exercise").textContent = node.exercise;
  get("resource").href = node.url;
  get("resource").textContent = node.linkLabel;
  lesson.showModal();
  lesson.scrollTop = 0;
}

get("closeLesson").addEventListener("click", () => lesson.close());
lesson.addEventListener("click", (event) => {
  if (event.target !== lesson) return;
  const bounds = lesson.getBoundingClientRect();
  if (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  )
    lesson.close();
});
lesson.addEventListener("close", () => {
  get("nodes")
    .querySelector(`[data-id="${activeButton.dataset.id}"]`)
    ?.focus({ preventScroll: true });
});
compactMap.addEventListener("change", renderMap);
renderMap();
new ResizeObserver(fitMap).observe(get("mapScroll"));
