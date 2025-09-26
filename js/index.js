require({
    urlArgs: "v=" + (new Date()).getTime(),
    packages: [{
        name: "msu",
        location: "./"
    }],
    paths: {
        "knockout": "./lib/knockout-latest",
        "text": "./lib/text",
        "css": "./lib/css.min",
        "material-components-web": "./lib/material-components-web.min",
        "leaflet": "./lib/leaflet"
    },
    map: {
        "*": {
        }
    },
    config: {
        "msu/pages/index": {
            version: "1.0.0"
        },        
        "msu/components/intro/intro": {
            title: "EmaIT",
            description: [
                "Sme tím skúsených odborníkov, ktorí sa špecializujú na vývoj softvéru a riešení na mieru",
                "Naším cieľom je poskytovať inovatívne a kvalitné softvérové produkty, ktoré pomáhajú našim klientom dosiahnuť ich obchodné ciele"
            ],
            image: "img/logo.png",
            action: {
                text: "Náš repozitár",
                icon: "code",
                url: "https://github.com/info-emait?tab=repositories"
            }
        },
        "msu/components/projects/projects": {
            title: "Naše projekty",
            items: [{
                title: "query gantt",
                description: "Rozšírenie pre the Azure DevOps, ktoré umožňuje zobraziť ľubovolnú query ako Gantt chart.",
                url: "https://marketplace.visualstudio.com/items?itemName=emait.querygantt",
                icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'><path fill='currentColor' d='M216 42h-82V24a6 6 0 0 0-12 0v18H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h43.52l-24.21 30.25a6 6 0 0 0 9.38 7.5L98.88 190h58.24l30.19 37.75a6 6 0 0 0 9.38-7.5L172.48 190H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 134a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm-116-56v24a6 6 0 0 1-12 0v-24a6 6 0 0 1 12 0m32-16v40a6 6 0 0 1-12 0v-40a6 6 0 0 1 12 0m32-16v56a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0'/></svg>"
            }, {
                title: "tags manager",
                description: "Rozšírenie pre the Azure DevOps, ktoré umožňuje spravovať tag-y v rámci projektu.",
                url: "https://marketplace.visualstudio.com/items?itemName=emait.tagsmanager",
                icon: "<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'><path fill='currentColor' d='M241.91 137.42L142.59 38.1a13.94 13.94 0 0 0-9.9-4.1H40a6 6 0 0 0-6 6v92.69a13.94 13.94 0 0 0 4.1 9.9l99.32 99.32a14 14 0 0 0 19.8 0l84.69-84.69a14 14 0 0 0 0-19.8m-8.49 11.31l-84.69 84.69a2 2 0 0 1-2.83 0L46.59 134.1a2 2 0 0 1-.59-1.41V46h86.69a2 2 0 0 1 1.41.59l99.32 99.31a2 2 0 0 1 0 2.83M94 84a10 10 0 1 1-10-10a10 10 0 0 1 10 10'/></svg>"
            }]
        },
        "msu/components/contactform/contactform": {
            title: "Napíšte nám",
            target: "info.emait@gmail.com"
        },
        "msu/components/map/map": {
            marker: [48.156220, 17.141770],
            zoom: 17,
            popup: "<strong>EmaIT s.r.o.</strong><br>Líščie Nivy 25, 821 08<br>Ružinov"
        },
        "msu/components/menu/menu": {
            title: "EmaIT",
            description: [
                "Tvorba webových a mobilných aplikácií, webových portálov, stránok a elektronických obchodov"
            ],
            image: "img/logo.png",
            items: [
                { target: "about", text: "O nás" },
                { target: "projects", text: "Naše projekty" },
                { target: "contact", text: "Napíšte nám" },
                { target: "map", text: "Nájdite nás" },
                { target: "invoice", text: "Fakturačné údaje" }
            ]
        }
    }
}, ["msu/pages/index"]);
