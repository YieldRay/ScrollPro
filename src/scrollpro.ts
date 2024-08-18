const className = "scroll-pro";

/**
 * Provide [scrollpup.js](https://github.com/flouthoc/scrollpup.js/) compatible APIscrollpup.js
 */
export const scrollpro = (opts?: { background?: string; height?: string }) => {
    const background = opts?.background ?? "linear-gradient(to right, #36d1dc, #5b86e5)";
    const height = opts?.height ?? "10px";
    let scrollbar = document.getElementsByClassName(className)[0] as HTMLElement;
    if (!scrollbar) {
        scrollbar = document.createElement("div");
        scrollbar.className = className;
        document.body.appendChild(scrollbar);
    }
    scrollbar.style.height = height;
    scrollbar.style.background = background;
    scrollbar.style.position = "fixed";
    scrollbar.style.top = "0";
    scrollbar.style.right = "0";
    scrollbar.style.left = "0";
    scrollbar.style.width = "0%";

    const run = () => {
        const fullPage = document.documentElement;
        const fullBody = document.body;
        const percent = Math.floor(
            ((fullPage["scrollTop"] || fullBody["scrollTop"]) /
                ((fullPage["scrollHeight"] || fullBody["scrollHeight"]) - fullPage.clientHeight)) *
                100
        );

        scrollbar.style.width = percent + "%";
    };

    window.addEventListener("scroll", () => requestAnimationFrame(run));
    return scrollbar;
};
