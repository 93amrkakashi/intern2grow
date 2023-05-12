const htmlCode = document.getElementById("htmlCode") as HTMLTextAreaElement;
const cssCode = document.getElementById("cssCode") as HTMLTextAreaElement;
const jsCode = document.getElementById("jsCode") as HTMLTextAreaElement;

const previewWindow = document.getElementById("preview-window") as HTMLIFrameElement;

function showPreview() {
  const html = htmlCode.value;
  const css = cssCode.value;
  const js = jsCode.value;

  const frame = previewWindow.contentWindow?.document;
  if (frame) {
    frame.open();
    frame.write(html + "<style>" + css + "</style>" + "<script>" + js + "</script>");
    frame.close();
  }
}

function show(elementId: string) {
  const html = document.getElementById("html") as HTMLDivElement;
  const css = document.getElementById("css")as HTMLDivElement;
  const js = document.getElementById("js")as HTMLDivElement;
  const result = document.getElementById("result")as HTMLDivElement;

  html.style.display = "none";
  css.style.display = "none";
  js.style.display = "none";
  result.style.display = "none";

  const selected = document.getElementById(elementId)!;
  selected.style.display = "block";
}

function showAll() {
  const html = document.getElementById("html") as HTMLDivElement;
  const css = document.getElementById("css")as HTMLDivElement;
  const js = document.getElementById("js")as HTMLDivElement;
  const result = document.getElementById("result")as HTMLDivElement;

  if (window.innerWidth >= 992) {
    html.style.display = "block";
    css.style.display = "block";
    js.style.display = "block";
    result.style.display = "block";
  }
  if (window.innerWidth < 992 && html.style.display === "block") {
    css.style.display = "none";
    js.style.display = "none";
    result.style.display = "none";
  }
}


window.addEventListener("resize", showAll);
