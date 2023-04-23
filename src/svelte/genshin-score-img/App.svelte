<script>
    import ScoreTable from "./ScoreTable.svelte";
    import CalcTypeSelect from "../components/CalcTypeSelect.svelte";
    import Tesseract from "tesseract.js";
    let calcType;
    let canvas;
    let stats = [];
    function handlePaste(e) {
        e.preventDefault();

        let file;
        if (e.clipboardData.types[0] === "Files") {
            file = e.clipboardData.items[0];
        } else if (e.clipboardData.types[1] === "Files") {
            file = e.clipboardData.items[1];
        } else {
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file.getAsFile());
        reader.addEventListener("load", async (e) => {
            const image = new Image();
            const base64 = e.target.result;

            image.src = base64;
            image.addEventListener("load", () => {
                canvas.width = image.width;
                canvas.height = image.height;
                canvas.getContext("2d").drawImage(image, 0, 0);
            });

            const {
                data: { text },
            } = await Tesseract.recognize(base64, "jpn");

            console.log(text);

            stats = [];

            text.replace(/ /g, "")
                .split("\n")
                .filter((str) => str.startsWith("・"))
                .forEach((str) => {
                    str = str
                        .slice(1)
                        .replace(/⓪/g, "0")
                        .replace(/①/g, "1")
                        .replace(/②/g, "2")
                        .replace(/③/g, "3")
                        .replace(/④/g, "4")
                        .replace(/⑤/g, "5")
                        .replace(/⑥/g, "6")
                        .replace(/⑦/g, "7")
                        .replace(/⑧/g, "8")
                        .replace(/⑨/g, "9")
                        .replace(/カ/g, "力")
                        .replace(/%6/g, "%");
                    if (/\.[0-9]9%/.test(str)) {
                        str = `${str.slice(0, -2)}%`;
                    }
                    stats.push(str);
                });
        });
    }
</script>

<div on:paste={handlePaste} contenteditable>ここに貼り付け</div>
<canvas bind:this={canvas} width="0" height="0" />

<CalcTypeSelect bind:selected={calcType} />

<ScoreTable {stats} {calcType} />

<style>
    :global(option) {
        background: var(--background-alt);
    }
</style>
