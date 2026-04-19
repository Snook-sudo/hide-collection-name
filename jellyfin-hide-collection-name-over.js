(function () {
    "use strict";

    function isCollectionPage() {
        return document.querySelector(".childrenItemsContainer, .itemsContainer");
    }

    /*  RIMOZIONE TITOLI (INVARIATA) */
    function removeTextNodesOnly(root) {
        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let node;
        while ((node = walker.nextNode())) {
            if (node.nodeValue.trim() !== "") {
                node.nodeValue = "";
            }
        }
    }

    function hideTitlesOnly() {
        if (!isCollectionPage()) return;

        document.querySelectorAll(".cardText, .cardTextCentered").forEach(el => {
            removeTextNodesOnly(el);
        });
    }

    /*  CSS MINIMALE E STABILE */
    function injectFix() {
        const id = "collection-full-ui";
        if (document.getElementById(id)) return;

        const style = document.createElement("style");
        style.id = id;

        style.textContent = `
            /* ❌ CONTROLLI OVERLAY */
            .cardOverlay button,
            .cardOverlay a,
            .cardOverlay [role="button"],
            .cardOverlay svg,
            .cardOverlay i {
                display: none !important;
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
            }

            /* ❌ BOTTONI OVERLAY */
            .cardOverlayButton {
                display: none !important;
            }

            /* ❌ ZOOM SEMPLICE E SICURO */
            .card,
            .item {
                transition: transform 0.18s ease;
                transform-origin: center;
            }

            .card:hover,
            .item:hover {
                transform: scale(1.03);
                z-index: 10;
            }
        `;

        document.head.appendChild(style);
    }

    const observer = new MutationObserver(hideTitlesOnly);

    function init() {
        injectFix();
        hideTitlesOnly();

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
