
document.addEventListener("DOMContentLoaded", async () => {
    const articlesList = document.getElementById("articlesList");
        const response = await fetch("/artigos");
        const files = await response.json();
            files.forEach(file => {
                if (file.endsWith(".pdf")) {
                    const articleDiv = document.createElement("div");
                    articleDiv.className = "article-item";

                    const articleTitle = document.createElement("h2");
                    articleTitle.textContent = file.replace(".pdf", "");

                    const viewLink = document.createElement("a");
                    viewLink.href = `/artigos/${file}`;
                    viewLink.target = "_blank";
                    viewLink.textContent = "Abrir";

                    const downloadLink = document.createElement("a");
                    downloadLink.href = `/artigos/${file}`;
                    downloadLink.download = file;
                    downloadLink.textContent = "Baixar";

                    articleDiv.appendChild(articleTitle);
                    articleDiv.appendChild(viewLink);
                    articleDiv.appendChild(document.createTextNode(" | "));
                    articleDiv.appendChild(downloadLink);

                    articlesList.appendChild(articleDiv);
                }
            });
});
