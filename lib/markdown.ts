// Konverter Markdown -> HTML minimal (server-side, tanpa dependensi).
// Mendukung: heading, list, bold, link, gambar, blockquote, hr, paragraf.

function inline(t: string): string {
  return t
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-2xl my-4 w-full" />')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-zamrud-700 underline">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

export function markdownKeHtml(md: string): string {
  const lines = md.split("\n");
  const out: string[] = [];
  let i = 0;
  let listTerbuka: string | null = null;

  const tutupList = () => {
    if (listTerbuka) { out.push(`</${listTerbuka}>`); listTerbuka = null; }
  };

  while (i < lines.length) {
    const ln = lines[i].replace(/\s+$/, "");

    if (ln.trim() === "---") { tutupList(); out.push("<hr class=\"my-6 border-zamrud-100\" />"); i++; continue; }

    const h = ln.match(/^(#{1,3})\s+(.*)/);
    if (h) {
      tutupList();
      const level = h[1].length;
      const cls = level === 1 ? "text-2xl font-extrabold text-zamrud-800 mt-8" : level === 2 ? "text-xl font-bold text-zamrud-800 mt-6" : "text-lg font-bold text-zamrud-700 mt-4";
      out.push(`<h${level} class="${cls}">${inline(h[2])}</h${level}>`);
      i++; continue;
    }

    const bq = ln.match(/^>\s?(.*)/);
    if (bq) {
      tutupList();
      out.push(`<blockquote class="border-l-4 border-zamrud-300 pl-4 my-4 text-slate-600 italic">${inline(bq[1])}</blockquote>`);
      i++; continue;
    }

    const li = ln.match(/^\s*([-*]|\d+\.)\s+(.*)/);
    if (li) {
      const tag = /^\d+\.$/.test(li[1]) ? "ol" : "ul";
      if (listTerbuka !== tag) {
        tutupList();
        out.push(tag === "ol" ? '<ol class="list-decimal ml-6 my-3 space-y-1">' : '<ul class="list-disc ml-6 my-3 space-y-1">');
        listTerbuka = tag;
      }
      out.push(`<li>${inline(li[2])}</li>`);
      i++; continue;
    }

    tutupList();
    if (ln.trim()) out.push(`<p class="my-3">${inline(ln)}</p>`);
    i++;
  }
  tutupList();
  return out.join("\n");
}
