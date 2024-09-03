const config = window.docsConfig || {}
function generateHTML() {
    const header = document.createElement("header")
    const headerContainer = document.createElement("div")
    headerContainer.className = "header-container"

    // home button
    const homeButton = document.createElement("button")
    homeButton.id = "homeButton"
    homeButton.className = "home-button"
    const logoUrl = config.logo || null
    if (logoUrl) {
        // Set the logo as the background image of the home button
        homeButton.style.backgroundImage = `url(${logoUrl})`
        homeButton.style.backgroundSize = "contain" // Ensure the image covers the button
        homeButton.style.backgroundPosition = "center" // Center the image
    } else {
        // Use the Nerd Font icon as the default content
        homeButton.textContent = "\uEB06" // Unicode for the Nerd Font icon
        homeButton.style.fontFamily = "NerdFontSymbols" // Ensure the correct font family is applied
        homeButton.style.fontSize = "24px" // Adjust the size as needed
        homeButton.style.display = "flex"
        homeButton.style.alignItems = "center"
        homeButton.style.justifyContent = "center"
    }

    const redirectUrl = config.url || ""
    homeButton.addEventListener("click", () => {
        window.location.href = redirectUrl
    })

    // Append the toggle button to the header container
    headerContainer.appendChild(homeButton)

    // Create the toggle navigation button
    const toggleNavButton = document.createElement("button")
    toggleNavButton.id = "toggleNavButton"
    toggleNavButton.className = "toggle-nav-button"

    // Append the toggle button to the header container
    headerContainer.appendChild(toggleNavButton)

    const searchBar = document.createElement("div")
    searchBar.className = "input-wrapper search-bar"

    const inputContainer = document.createElement("div")
    inputContainer.className = "input-container"

    const searchIcon = document.createElement("div")
    searchIcon.className = "search-icon"

    const magnifyGlass = document.createElement("span")
    magnifyGlass.className = "magnify-glass"

    searchIcon.appendChild(magnifyGlass)

    const input = document.createElement("input")
    input.setAttribute("autocomplete", "off")
    input.setAttribute("type", "text")
    input.id = "listSearch"
    input.className = "dialog-input"
    input.setAttribute("placeholder", "Search")

    inputContainer.appendChild(searchIcon)
    inputContainer.appendChild(input)
    searchBar.appendChild(inputContainer)
    headerContainer.appendChild(searchBar)

    const themeToggle = document.createElement("button")
    themeToggle.id = "themeToggle"
    headerContainer.appendChild(themeToggle)

    header.appendChild(headerContainer)

    const allContent = document.createElement("div")
    allContent.className = "allContent"

    const navbar = document.createElement("nav")
    navbar.id = "navbar"
    navbar.className = "navopen"

    const mainContent = document.createElement("main")
    mainContent.id = "content"

    allContent.appendChild(navbar)
    allContent.appendChild(mainContent)

    document.body.appendChild(header)
    document.body.appendChild(allContent)

    // Add event listener to the toggle button
    toggleNavButton.addEventListener("click", function () {
        if (navbar.classList.contains("navopen")) {
            navbar.classList.remove("navopen")
            navbar.classList.add("navclose")
        } else {
            navbar.classList.remove("navclose")
            navbar.classList.add("navopen")
        }
    })

    // Function to check and toggle nav state based on window width
    function checkWidth() {
        if (window.innerWidth < 800) {
            navbar.classList.remove("navopen")
            navbar.classList.add("navclose")
        } else {
            navbar.classList.remove("navclose")
            navbar.classList.add("navopen")
        }
    }

    // Initial check
    checkWidth()

    // Add resize event listener to check window width
    window.addEventListener("resize", checkWidth)
}

generateHTML()

function loadStylesheets() {
    const stylesheets = [
        "https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap",
        "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap",
        //"docs.css",
    ]

    stylesheets.forEach((href) => {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = href
        document.head.appendChild(link)
    })
}

loadStylesheets()

function loadScripts(scripts, callback) {
    let loadedCount = 0;

    scripts.forEach((src) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false; // Ensure scripts load in order if they have dependencies
        script.onload = () => {
            loadedCount++;
            if (loadedCount === scripts.length) {
                callback(); // All scripts are loaded
            }
        };
        script.onerror = () => {
            console.error(`Failed to load script: ${src}`);
        };
        document.body.appendChild(script);
    });
}

const scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-javascript.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-css.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-markdown.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-python.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-java.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-csharp.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-json.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-jsonp.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-json5.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-typescript.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-coffeescript.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-pug.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-jsx.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-sass.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-scss.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-less.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/toolbar/prism-toolbar.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/line-numbers/prism-line-numbers.min.js",
    "https://cdn.jsdelivr.net/npm/marked/marked.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/split.js/1.6.2/split.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs/loader.min.js",
    "https://cdn.jsdelivr.net/gh/Tezumie/aijs-mini-editor@latest/mini-editor.js",
]

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle")
    themeToggle.addEventListener("click", () => {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    })
    const savedTheme = localStorage.getItem("theme") || config.theme || "light"
    setTheme(savedTheme)
})

let darkThemeName = "aijs_dark_modern"
let lightThemeName = "aijs_light"
function setTheme(theme) {
    if (theme === "dark") {
        document.documentElement.style.setProperty("--primary", "#141414")
        document.documentElement.style.setProperty("--secondary", "#181818")
        document.documentElement.style.setProperty("--darker", "#292929")
        document.documentElement.style.setProperty("--backGround", "#0e0e0f")
        document.documentElement.style.setProperty("--backGroundHome", "#181818")
        document.documentElement.style.setProperty("--accent", "#4154ff")
        document.documentElement.style.setProperty("--hover", "#1f1f1f")
        document.documentElement.style.setProperty("--textColor", "#f3f3f3")
        document.documentElement.style.setProperty("--dimText", "#d8dddf")
        document.documentElement.style.setProperty("--noteText", "#767676")
        document.documentElement.style.setProperty("--borderColor", "#2c2c2c")
        document.documentElement.style.setProperty("--textHilight", "#1a4a7d75")
        document.documentElement.style.setProperty("--blurColor", "#2020206c")
        document.documentElement.style.setProperty("--boxShadow", "rgba(0, 0, 0, 0.3)")
        document.documentElement.style.setProperty("--href-color", "#4184ff")
        document.documentElement.style.setProperty("--callOut", " #519aba18 ")
        document.documentElement.style.setProperty("--callOut-note", " #50BA7D18 ")
        document.documentElement.style.setProperty("--callOut-alert", " #CBC93D18 ")
        document.documentElement.style.setProperty("--callOut-alt", "#17151f")
        themeToggle.classList.remove("light-theme")
        themeToggle.classList.add("dark-theme")
        setMonacoEditorTheme(darkThemeName)
        setEditorTheme(darkThemeName)
    } else {
        document.documentElement.style.setProperty("--primary", "#f8f8f8")
        document.documentElement.style.setProperty("--secondary", "#f0efef")
        document.documentElement.style.setProperty("--darker", "#f7f7f7")
        document.documentElement.style.setProperty("--backGround", "#ffffff")
        document.documentElement.style.setProperty("--backGroundHome", "#ffffff")
        document.documentElement.style.setProperty("--accent", "#4154ff")
        document.documentElement.style.setProperty("--hover", "#e9e9e9")
        document.documentElement.style.setProperty("--textColor", "#161720")
        document.documentElement.style.setProperty("--dimText", "#272838")
        document.documentElement.style.setProperty("--noteText", "#7d7d7d")
        document.documentElement.style.setProperty("--borderColor", "#e0e0e0")
        document.documentElement.style.setProperty("--textHilight", "#add6ffa6")
        document.documentElement.style.setProperty("--blurColor", "#ffffff77")
        document.documentElement.style.setProperty("--boxShadow", "rgba(65, 65, 65, 0.15)")
        document.documentElement.style.setProperty("--href-color", "#4154ff")
        document.documentElement.style.setProperty("--callOut", "#b3e7ff70")
        document.documentElement.style.setProperty("--callOut-note", " #b5f1bd70 ")
        document.documentElement.style.setProperty("--callOut-alert", " #fdf19f70 ")
        document.documentElement.style.setProperty("--callOut-alt", "#e8e3fd")
        themeToggle.classList.remove("dark-theme")
        themeToggle.classList.add("light-theme")
        setMonacoEditorTheme(lightThemeName)
        setEditorTheme(lightThemeName)
    }
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
}

const themeCache = {}

function setMonacoEditorTheme(themeName) {
    let attempts = 0
    const maxAttempts = 10
    const interval = 100

    const checkEditorAvailability = () => {
        attempts++
        if (typeof monaco !== "undefined" && monaco.editor) {
            if (themeCache[themeName]) {
                monaco.editor.defineTheme("custom-theme", themeCache[themeName])
                monaco.editor.setTheme("custom-theme")
                modifyTokenizer("javascript", jsCustomTokenizer)
            } else {
                fetch(`./themes/${themeName}.json`)
                    .then((response) => response.json())
                    .then((themeData) => {
                        themeCache[themeName] = themeData
                        monaco.editor.defineTheme("custom-theme", themeData)
                        monaco.editor.setTheme("custom-theme")
                        modifyTokenizer("javascript", jsCustomTokenizer)
                    })
                    .catch((error) => {
                        console.error("Error loading custom theme:", error)
                    })
            }
        } else if (attempts < maxAttempts) {
            setTimeout(checkEditorAvailability, interval)
        } else {
            // console.error('Failed to set Monaco Editor theme after 5 attempts');
        }
    }

    checkEditorAvailability()
}

async function modifyTokenizer(languageId, customRules) {
    const allLangs = monaco.languages.getLanguages()
    const { conf, language } = await allLangs.find(({ id }) => id === languageId).loader()

    for (let key in customRules) {
        const value = customRules[key]
        if (key === "tokenizer") {
            for (let category in value) {
                const tokenDefs = value[category]
                if (!language.tokenizer.hasOwnProperty(category)) {
                    language.tokenizer[category] = []
                }
                if (Array.isArray(tokenDefs)) {
                    language.tokenizer[category].unshift(...tokenDefs)
                }
            }
        }
    }
    monaco.languages.setMonarchTokensProvider(languageId, language)
}

const jsCustomTokenizer = {
    tokenizer: {
        root: [[/[a-zA-Z_$][\w$]*(?=\()/, "functionName"]],
    },
}

async function setEditorTheme(themeName) {
    fetch(`./themes/${themeName}.json`)
        .then((response) => response.json())
        .then((themeData) => {
            setTokenColorsAsVariables(themeData.rules)
        })
        .catch((error) => {
            console.error("Error loading custom theme:", error)
        })
}

function setRootCssVariables(colors) {
    const root = document.documentElement

    Object.keys(colors).forEach((key) => {
        const varName = `--${key.replace(/\./g, "-")}`
        root.style.setProperty(varName, colors[key])
    })
}
function setTokenColorsAsVariables(rules) {
    const root = document.documentElement

    rules.forEach((rule) => {
        const tokenName = rule.token === "" ? "default" : rule.token.replace(/\./g, "-")

        if (rule.foreground) {
            const foregroundVarName = `--token-${tokenName}-fg`
            root.style.setProperty(foregroundVarName, rule.foreground)
        }
        if (rule.background) {
            const backgroundVarName = `--token-${tokenName}-bg`
            root.style.setProperty(backgroundVarName, rule.background)
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    loadScripts(scripts, () => {
        let markdownSections = {};
        fetch("docs.md")
            .then((response) => response.text())
            .then((markdownText) => {
                markdownSections = parseMarkdownIntoSections(markdownText);
                populateNavigation(markdownSections);
                loadInitialContent(markdownSections);
            })
            .catch((error) => console.error("Error loading the Markdown file:", error));
  
        function parseMarkdownIntoSections(markdownText) {
            let sections = {}
            const lines = markdownText.split("\n")
            let currentSectionId = ""
            let currentSubsectionId = ""
            let idCounters = {}
            let insideCodeBlock = false

            function extractAttributes(line) {
                const attributes = {}
                const dataUrlMatch = line.match(/data-url="(.*?)"/)
                const dataIconMatch = line.match(/data-icon="(.*?)"/)
                const dataColorMatch = line.match(/data-color="(.*?)"/)
                if (dataUrlMatch) attributes.url = dataUrlMatch[1]
                if (dataIconMatch) attributes.icon = dataIconMatch[1]
                if (dataColorMatch) attributes.color = dataColorMatch[1]
                return attributes
            }

            lines.forEach((line, index) => {
                if (line.startsWith("```")) {
                    insideCodeBlock = !insideCodeBlock
                }

                let isMarkdownH1 = false
                let isMarkdownH2 = false
                let isHTMLH1 = false
                let isHTMLH2 = false
                let title = ""
                let id = ""
                let attributes = {}

                if (!insideCodeBlock) {
                    if (line.startsWith("# ")) {
                        title = line.substring(2)
                        isMarkdownH1 = true
                    } else if (line.startsWith("## ")) {
                        title = line.substring(3)
                        isMarkdownH2 = true
                    }

                    const htmlH1Match = line.match(/<h1.*?id="(.*?)".*?>(.*?)<\/h1>/i)
                    const htmlH2Match = line.match(/<h2.*?id="(.*?)".*?>(.*?)<\/h2>/i)
                    if (htmlH1Match) {
                        id = htmlH1Match[1]
                        title = htmlH1Match[2]
                        attributes = extractAttributes(line)
                        isHTMLH1 = true
                    } else if (htmlH2Match) {
                        id = htmlH2Match[1]
                        title = htmlH2Match[2]
                        attributes = extractAttributes(line)
                        isHTMLH2 = true
                    }
                }

                if (isMarkdownH1 || isHTMLH1) {
                    if (!isHTMLH1) {
                        id = title.toLowerCase().replace(/\s+/g, "-")
                    }
                    id = makeUniqueId(id, idCounters)
                    currentSectionId = id
                    currentSubsectionId = ""
                    sections[id] = { title: title, content: line, subsections: {}, ...attributes }
                } else if ((isMarkdownH2 || isHTMLH2) && currentSectionId) {
                    if (!isHTMLH2) {
                        id = title.toLowerCase().replace(/\s+/g, "-")
                    }
                    id = makeUniqueId(id, idCounters, currentSectionId)
                    currentSubsectionId = id
                    sections[currentSectionId].subsections[id] = { title: title, content: line, ...attributes }
                } else if (currentSectionId) {
                    if (currentSubsectionId) {
                        sections[currentSectionId].subsections[currentSubsectionId].content += `\n${line}`
                    } else {
                        sections[currentSectionId].content += `\n${line}`
                    }
                }
            })

            return sections
        }

        function makeUniqueId(baseId, idCounters, prefix = "") {
            const fullId = prefix ? `${prefix}-${baseId}` : baseId
            if (idCounters[fullId] == null) {
                idCounters[fullId] = 0
            } else {
                idCounters[fullId]++
                return `${fullId}-${idCounters[fullId]}`
            }
            return fullId
        }

        let hasSmootheScroll = true
        function populateNavigation(sections) {
            const navbar = document.getElementById("navbar")
            navbar.innerHTML = ""

            Object.keys(sections).forEach((sectionId) => {
                const section = sections[sectionId]
                const sectionContainer = document.createElement("div")
                sectionContainer.classList.add("section-container")
                const sectionLink = document.createElement("a")
                sectionLink.textContent = section.title
                sectionLink.href = `#${sectionId}`
                sectionLink.classList.add("section-link")

                // Add data-url and data-icon attributes if they exist
                if (section.url) {
                    sectionLink.setAttribute("data-url", section.url)
                    sectionLink.style.setProperty("--header-url", section.url)
                }
                if (section.color) {
                    sectionLink.setAttribute("data-color", section.color)
                    sectionLink.style.setProperty("--header-color", section.color)
                }
                if (section.icon) {
                    sectionLink.setAttribute("data-icon", section.icon)
                    sectionLink.style.setProperty("--header-icon", `"${section.icon}"`)
                    sectionLink.style.setProperty("--header-icon-space", `"\\00A0\\00A0\\00A0"`)
                } else {
                    sectionLink.style.setProperty("--header-icon-space", `""`)
                }

                const toggleButton = document.createElement("span")
                toggleButton.classList.add("toggle-button", "closed")
                toggleButton.onclick = function (e) {
                    e.stopPropagation()
                    const subsectionsContainer = this.parentNode.nextElementSibling
                    if (subsectionsContainer.style.display === "none" || !subsectionsContainer.style.display) {
                        subsectionsContainer.style.display = "block"
                        this.classList.remove("closed")
                        this.classList.add("open")
                    } else {
                        subsectionsContainer.style.display = "none"
                        this.classList.remove("open")
                        this.classList.add("closed")
                    }
                }
                sectionLink.appendChild(toggleButton)
                sectionLink.addEventListener("click", (e) => {
                    e.preventDefault()
                    if (currentLoadedSectionId === sectionId) {
                        const isVisible = subsectionsContainer.style.display !== "none"
                        subsectionsContainer.style.display = isVisible ? "none" : "block"
                        const toggleButton = e.target.querySelector(".toggle-button")
                        if (toggleButton) {
                            if (isVisible) {
                                toggleButton.classList.remove("open")
                                toggleButton.classList.add("closed")
                            } else {
                                toggleButton.classList.remove("closed")
                                toggleButton.classList.add("open")
                            }
                        }
                    } else {
                        updateMainContent(sectionId, sections)
                    }
                })

                sectionContainer.appendChild(sectionLink)
                const subsectionsContainer = document.createElement("div")
                subsectionsContainer.style.display = "none"

                Object.keys(section.subsections).forEach((subId) => {
                    const subsection = section.subsections[subId]
                    const subLink = document.createElement("a")
                    subLink.textContent = `${subsection.title}`
                    subLink.href = `#${subId}`
                    subLink.classList.add("subsection-link")
                    subLink.style.marginLeft = "20px"

                    // Add data-url and data-icon attributes if they exist
                    if (subsection.url) {
                        subLink.setAttribute("data-url", subsection.url)
                        subLink.style.setProperty("--header-url", subsection.url)
                    }
                    if (subsection.color) {
                        subLink.setAttribute("data-color", subsection.color)
                        subLink.style.setProperty("--header-color", subsection.color)
                    }
                    if (subsection.icon) {
                        subLink.setAttribute("data-icon", subsection.icon)
                        subLink.style.setProperty("--header-icon", `"${subsection.icon}"`)
                        subLink.style.setProperty("--header-icon-space", `"\\00A0\\00A0\\00A0"`)
                    } else {
                        subLink.style.setProperty("--header-icon-space", `""`)
                    }

                    subLink.addEventListener("click", (e) => {
                        e.preventDefault()
                        if (currentLoadedSectionId === sectionId) {
                            const subsectionElement = document.getElementById(subId)
                            if (subsectionElement) {
                                history.pushState(null, "", `#${subId}`)
                                const contentContainer = document.getElementById("content")
                                if (hasSmootheScroll) {
                                    setScrollBehavior("smooth")
                                }
                                scrollToElementWithinContainer(contentContainer, subsectionElement)
                                hasSmootheScroll = true
                            }
                        } else {
                            updateMainContent(sectionId, sections, () => {
                                setTimeout(() => {
                                    const subsectionElement = document.getElementById(subId)
                                    if (subsectionElement) {
                                        history.pushState(null, "", `#${subId}`)
                                        const contentContainer = document.getElementById("content")
                                        scrollToElementWithinContainer(contentContainer, subsectionElement)
                                    }
                                }, 0)
                            })
                        }
                    })
                    subsectionsContainer.appendChild(subLink)
                })

                sectionContainer.appendChild(subsectionsContainer)
                navbar.appendChild(sectionContainer)
            })
        }

        function scrollToElementWithinContainer(container, element) {
            const containerTop = container.getBoundingClientRect().top
            const elementTop = element.getBoundingClientRect().top
            const containerScrollTop = container.scrollTop
            const offsetTop = elementTop - containerTop + containerScrollTop
            container.scrollTop = offsetTop + 2;
        }
        function setScrollBehavior(behavior) {
            const content = document.getElementById("content")
            if (content.style.scrollBehavior !== behavior) {
                content.style.scrollBehavior = behavior
            }
        }

        let currentLoadedSectionId = ""
        function executeDataScripts(content) {
            const scriptDivs = content.querySelectorAll("div[data-script]")
            scriptDivs.forEach((div) => {
                let scriptContent = div.getAttribute("data-script")
                if (scriptContent) {
                    scriptContent = scriptContent.replace(/\/\/n/g, "")
                    const newScript = document.createElement("script")
                    newScript.type = div.getAttribute("data-type") || "text/javascript"
                    newScript.textContent = scriptContent
                    document.body.appendChild(newScript)
                    document.body.removeChild(newScript)
                }
            })
        }

        function updateMainContent(sectionId, sections, callback) {
            setScrollBehavior("auto")
            const contentArea = document.getElementById("content")

            contentArea.classList.remove("fade-in")
            contentArea.classList.add("fade-out")
            setTimeout(() => {
                contentArea.classList.remove("fade-out")
                contentArea.classList.add("fade-in")
            }, 0)
            const sectionIds = Object.keys(sections)
            const currentSectionIndex = sectionIds.indexOf(sectionId)
            currentLoadedSectionId = sectionId
            updateNavigationActiveState()
            const prevSectionId = currentSectionIndex > 0 ? sectionIds[currentSectionIndex - 1] : null
            const nextSectionId =
                currentSectionIndex < sectionIds.length - 1 ? sectionIds[currentSectionIndex + 1] : null

            if (marked && currentLoadedSectionId !== sectionId || marked && currentLoadedSectionId === sectionId) {
                contentArea.innerHTML = ""

                const section = sections[sectionId]
                let htmlContent = `<div id="${sectionId}">${marked.marked(section.content)}</div>`

                Object.keys(section.subsections).forEach((subId) => {
                    const subsection = section.subsections[subId]
                    htmlContent += `<br/><br/><div id="${subId}">${marked.marked(subsection.content)}</div>`
                })
                contentArea.innerHTML = htmlContent

                executeDataScripts(contentArea)

                const navButtonsContainer = document.createElement("div")
                navButtonsContainer.className = "nav-buttons-container"

                if (prevSectionId) {
                    const prevButton = document.createElement("button")
                    prevButton.className = "nav-button prev-section"
                    const prevLabel = document.createElement("div")
                    prevLabel.textContent = "Previous Section"
                    prevButton.appendChild(prevLabel)
                    const prevTitle = document.createElement("div")
                    prevTitle.textContent = sections[prevSectionId].title
                    prevButton.appendChild(prevTitle)

                    prevButton.addEventListener("click", () => updateMainContent(prevSectionId, sections))
                    navButtonsContainer.appendChild(prevButton)
                }

                if (nextSectionId) {
                    const nextButton = document.createElement("button")
                    nextButton.className = "nav-button next-section"
                    const nextLabel = document.createElement("div")
                    nextLabel.textContent = "Next Section"
                    nextButton.appendChild(nextLabel)
                    const nextTitle = document.createElement("div")
                    nextTitle.textContent = sections[nextSectionId].title
                    nextButton.appendChild(nextTitle)

                    nextButton.addEventListener("click", () => updateMainContent(nextSectionId, sections))
                    navButtonsContainer.appendChild(nextButton)
                }
                contentArea.appendChild(navButtonsContainer)
                const spacer = document.createElement("div")
                spacer.style.height = "100vh"
                contentArea.appendChild(spacer)
                currentLoadedSectionId = sectionId
                window.location.hash = sectionId

                if (typeof callback === "function") {
                    requestAnimationFrame(callback)
                }
                Prism.highlightAll()
                addCopyButtons()
                addLinkCopyButtons()
                convertMarkdownLinksToNavigationButtons(sections)

                updateStickyHeader()
            }
            const savedTheme = localStorage.getItem("theme") || "light"

            setTimeout(() => {
                setTheme(savedTheme)
            }, 0)

            document.querySelectorAll(".grid-button").forEach((button) => {
                const icon = button.getAttribute("data-icon")
                const color = button.getAttribute("data-color")
                if (icon) {
                    button.style.setProperty("--button-icon", `"${icon}"`)
                }
                if (color) {
                    button.style.setProperty("--icon-color", color)
                }
                button.addEventListener("click", () => {
                    const dataUrl = button.getAttribute("data-url")
                    navigateToSection(dataUrl, markdownSections)
                })
            })
            document.querySelectorAll("h1[data-icon], h2[data-icon]").forEach((header) => {
                const icon = header.getAttribute("data-icon")
                const color = header.getAttribute("data-color")
                if (icon) {
                    header.style.setProperty("--header-icon", `"${icon}"`)
                }
                if (color) {
                    header.style.setProperty("--header-color", color)
                }
            })
        }
        function updateStickyHeader() {
            const h2Wrappers = document.querySelectorAll(".h2-wrapper")
            let closestWrapper = null
            let closestDistance = Infinity

            h2Wrappers.forEach((wrapper) => {
                const rect = wrapper.getBoundingClientRect()
                const distance = Math.abs(rect.top) // Use absolute value to get closest to top

                if (distance < closestDistance) {
                    closestDistance = distance
                    closestWrapper = wrapper
                }
            })

            h2Wrappers.forEach((wrapper) => {
                wrapper.classList.remove("sticky")
            })

            if (closestWrapper) {
                closestWrapper.classList.add("sticky")

                const h2Element = closestWrapper.querySelector("h2")
                const subsectionId = h2Element ? h2Element.getAttribute("id") : null

                if (subsectionId) {
                    const navLinks = document.querySelectorAll(".subsection-link")
                    let isActiveSet = false

                    navLinks.forEach((link) => {
                        const href = link.getAttribute("href")

                        if (href.includes(subsectionId) && !isActiveSet) {
                            link.classList.add("active")
                            isActiveSet = true // Ensure only one link is active
                        } else {
                            link.classList.remove("active")
                        }
                    })
                }
            }
        }

        const contentDiv = document.getElementById("content")
        contentDiv.addEventListener("scroll", updateStickyHeader)

        function updateNavigationActiveState() {
            const links = document.querySelectorAll(".section-link, .subsection-link")
            links.forEach((link) => {
                if (link.getAttribute("href") === `#${currentLoadedSectionId}`) {
                    link.classList.add("active-section")
                    const parentSectionContainer = link.closest(".section-container")
                    if (parentSectionContainer) {
                        const subsectionsContainer = parentSectionContainer.querySelector("div")
                        const toggleButton = parentSectionContainer.querySelector(".toggle-button")
                        if (subsectionsContainer && toggleButton) {
                            subsectionsContainer.style.display = "block"
                            toggleButton.classList.add("open")
                            toggleButton.classList.remove("closed")
                        }
                    }
                } else {
                    link.classList.remove("active-section")
                }
            })
        }

        function loadInitialContent(sections) {
            const hash = window.location.hash.replace("#", "")
            let sectionId = null
            let subsectionId = null
            setScrollBehavior("auto")

            if (sections[hash]) {
                sectionId = hash
            } else {
                for (const [secId, secData] of Object.entries(sections)) {
                    if (secData.subsections && secData.subsections[hash]) {
                        sectionId = secId
                        subsectionId = hash
                        break
                    }
                }
            }

            if (sectionId) {
                updateMainContent(sectionId, sections, () => {
                    if (subsectionId) {
                        simulateSubsectionClick(subsectionId)
                    }
                })
            } else {
                const firstLink = document.querySelector(".section-link, .subsection-link")
                if (firstLink) {
                    firstLink.click()
                }
            }
        }

        function simulateSubsectionClick(subsectionId) {
            const subLink = document.querySelector(`a[href="#${subsectionId}"]`)
            if (subLink) {
                subLink.click()
            } else {
                console.error("Subsection link not found for:", subsectionId)
            }
        }

        function convertMarkdownLinksToNavigationButtons(sections) {
            document.querySelectorAll('#content a[href^="#"]').forEach((link) => {
                const sectionId = link.getAttribute("href").substring(1)
                let isSubsectionLink = false
                for (const [secId, secData] of Object.entries(sections)) {
                    if (secId === sectionId) {
                        isSubsectionLink = false
                        break
                    } else if (secData.subsections && Object.keys(secData.subsections).includes(sectionId)) {
                        isSubsectionLink = true
                        break
                    }
                }
                const button = document.createElement("button")
                button.textContent = link.textContent
                button.className = `custom-nav-button ${isSubsectionLink ? "subsection-nav" : "section-nav"}`
                button.type = "button"
                button.addEventListener("click", (e) => {
                    e.preventDefault()
                    navigateToSection(sectionId, sections)
                })
                link.parentNode.replaceChild(button, link)
            })
        }

        function navigateToSection(targetId, sections) {
            hasSmootheScroll = false
            let found = false
            for (const [sectionId, section] of Object.entries(sections)) {
                if (sectionId === targetId) {
                    loadContentForSection(targetId, sections)
                    found = true
                    break
                } else if (section.subsections && section.subsections[targetId]) {
                    loadContentForSection(sectionId, sections, () => {
                        simulateSubsectionClick(targetId)
                    })
                    found = true
                    break
                }
            }
            if (!found) {
                console.error("No matching section or subsection found for ID:", targetId)
            }
        }

        function loadContentForSection(sectionId, sections, callback) {
            if (currentLoadedSectionId === sectionId) {
                const subsectionElement = document.getElementById(sectionId)
                if (subsectionElement) {
                    history.pushState(null, "", `#${sectionId}`)
                    const contentContainer = document.getElementById("content")
                    setScrollBehavior("smooth")
                    scrollToElementWithinContainer(contentContainer, subsectionElement)
                }
            } else {
                updateMainContent(sectionId, sections, () => {
                    setTimeout(() => {
                        const subsectionElement = document.getElementById(sectionId)
                        if (subsectionElement) {
                            history.pushState(null, "", `#${sectionId}`)
                            const contentContainer = document.getElementById("content")
                            scrollToElementWithinContainer(contentContainer, subsectionElement)
                        }
                        if (typeof callback === "function") {
                            callback()
                        }
                    }, 0)
                })
            }
        }

        function addCopyButtons() {
            document.querySelectorAll("pre code").forEach((block) => {
                const button = document.createElement("button")
                button.className = "copy-button"
                button.type = "button"
                button.innerText = ""

                button.addEventListener("click", () => {
                    navigator.clipboard.writeText(block.innerText).then(() => {
                        button.textContent = "Copied!"
                        setTimeout(() => (button.textContent = ""), 2000)
                    })
                })

                const pre = block.parentNode
                if (pre.parentNode.classList.contains("code-block-wrapper")) {
                    return
                }

                const wrapper = document.createElement("div")
                wrapper.className = "code-block-wrapper"
                pre.parentNode.replaceChild(wrapper, pre)
                wrapper.appendChild(pre)
                wrapper.appendChild(button)
            })
        }
        function addLinkCopyButtons() {
            document.querySelectorAll("#content > div").forEach((sectionDiv) => {
                const id = sectionDiv.id

                sectionDiv.querySelectorAll("h1, h2").forEach((header) => {
                    const wrapper = document.createElement("div")
                    wrapper.className = "header-wrapper"

                    if (header.tagName === "H1") {
                        wrapper.classList.add("h1-wrapper")
                    } else if (header.tagName === "H2") {
                        wrapper.classList.add("h2-wrapper")
                    }

                    header.parentNode.insertBefore(wrapper, header)
                    wrapper.appendChild(header)

                    const button = document.createElement("button")
                    button.className = "link-copy-button"
                    button.type = "button"
                    button.innerText = ""

                    button.addEventListener("click", () => {
                        const url = `${window.location.origin}${window.location.pathname}#${id}`
                        button.classList.add("copied")
                        navigator.clipboard.writeText(url).then(() => {
                            button.textContent = ""
                            setTimeout(function () {
                                button.classList.remove("copied")
                            }, 2000)
                        })
                    })
                    wrapper.appendChild(button)
                })
            })
        }
        const searchInput = document.getElementById("listSearch")
        const searchResultsContainer = document.createElement("div")
        searchResultsContainer.id = "searchResultsContainer"
        searchResultsContainer.classList.add("search-results")
        document.querySelector(".input-wrapper").appendChild(searchResultsContainer)

        searchInput.addEventListener("input", () => {
            const searchText = searchInput.value.toLowerCase()
            if (searchText.length > 0) {
                performSearch(searchText)
            } else {
                displayPromptMessage("Start typing to search the documentation")
            }
        })

        displayPromptMessage("Start typing to search the documentation")

        function performSearch(searchText) {
            const results = []
            const sections = markdownSections

            Object.keys(sections).forEach((sectionId, sectionIndex) => {
                const section = sections[sectionId]
                const sectionTitle = stripMarkdown(stripHtmlTags(section.title.toLowerCase()))
                const sectionContent = stripMarkdown(stripHtmlTags(section.content.toLowerCase()))

                if (sectionTitle.includes(searchText)) {
                    results.push({
                        title: highlightSearchText(sectionTitle, searchText),
                        id: sectionId,
                        type: "section",
                        context: "",
                        priority: 1,
                        order: sectionIndex,
                    })
                } else if (sectionContent.includes(searchText)) {
                    const snippet = highlightSearchText(getContextSnippet(section.content, searchText), searchText)
                    results.push({
                        title: highlightSearchText(sectionTitle, searchText),
                        id: sectionId,
                        type: "section",
                        context: snippet,
                        priority: 3,
                        order: sectionIndex,
                    })
                }

                Object.keys(section.subsections).forEach((subId, subIndex) => {
                    const subsection = section.subsections[subId]
                    const subsectionTitle = stripMarkdown(stripHtmlTags(subsection.title.toLowerCase()))
                    const subsectionContent = stripMarkdown(stripHtmlTags(subsection.content.toLowerCase()))

                    if (subsectionTitle.includes(searchText)) {
                        results.push({
                            title: `${highlightSearchText(sectionTitle, searchText)} > ${highlightSearchText(
                                subsectionTitle,
                                searchText
                            )}`,
                            id: subId,
                            type: "subsection",
                            context: "",
                            priority: 2,
                            order: subIndex,
                        })
                    } else if (subsectionContent.includes(searchText)) {
                        const snippet = highlightSearchText(
                            getContextSnippet(subsection.content, searchText),
                            searchText
                        )
                        results.push({
                            title: `${highlightSearchText(sectionTitle, searchText)} > ${highlightSearchText(
                                subsectionTitle,
                                searchText
                            )}`,
                            id: subId,
                            type: "subsection",
                            context: snippet,
                            priority: 3,
                            order: subIndex,
                        })
                    }
                })
            })

            results.sort((a, b) => a.priority - b.priority || a.order - b.order)
            displaySearchResults(results, searchText)
        }

        function stripHtmlTags(html) {
            const div = document.createElement("div")
            div.innerHTML = html
            return div.textContent || div.innerText || ""
        }

        function stripMarkdown(text) {
            return text
                .replace(/!\[.*?\]\(.*?\)/g, "") // Remove image tags ![alt](url)
                .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Remove links [text](url)
                .replace(/(\*\*|__)(.*?)\1/g, "$2") // Remove bold **text** or __text__
                .replace(/(\*|_)(.*?)\1/g, "$2") // Remove italic *text* or _text_
                .replace(/~~(.*?)~~/g, "$1") // Remove strikethrough ~~text~~
                .replace(/`{1,2}[^`](.*?)`{1,2}/g, "$1") // Remove inline code `text` or ``text``
                .replace(/^#{1,6}\s*(.*?)\s*$/gm, "$1") // Remove headings # Heading 1 - ###### Heading 6
                .replace(/^\s*\n\|\s*\w+.*\|\s*\n\|\s*[-|]+\s*\|/g, "") // Remove tables
                .replace(/^\s*\n-\s.*/gm, "") // Remove lists with -
                .replace(/^\s*\n\d+\.\s.*/gm, "") // Remove lists with numbers
                .replace(/>\s*/g, "") // Remove blockquotes >
                .replace(/^\s*(\n)?(\*|-|\+)\s+/gm, "") // Remove unordered lists
                .replace(/^\s*(\n)?[0-9]+\.\s+/gm, "") // Remove ordered lists
                .replace(/^\s*(\n)?\[\s\]/gm, "") // Remove checkboxes
                .replace(/^\s*(\n)?\[(x|X)\]/gm, "") // Remove checked checkboxes
                .replace(/[\*\_]+/g, "") // Remove residual asterisks/underscores
                .trim() // Trim whitespace
        }

        function highlightSearchText(text, searchText) {
            const startIndex = text.toLowerCase().indexOf(searchText)
            if (startIndex === -1) {
                return text
            }
            const endIndex = startIndex + searchText.length
            const highlightedText =
                text.substring(0, startIndex) +
                "<span class='highlight'>" +
                text.substring(startIndex, endIndex) +
                "</span>" +
                text.substring(endIndex)

            return highlightedText
        }

        function getContextSnippet(content, searchText, beforeAfterChars = 30) {
            const lowerContent = stripMarkdown(stripHtmlTags(content.toLowerCase()))
            const startIndex = lowerContent.indexOf(searchText.toLowerCase())
            if (startIndex === -1) return ""

            const start = Math.max(startIndex - beforeAfterChars, 0)
            const end = Math.min(startIndex + searchText.length + beforeAfterChars, lowerContent.length)

            let snippet = lowerContent.substring(start, end)
            if (start > 0) snippet = "..." + snippet
            if (end < lowerContent.length) snippet += "..."
            return snippet
        }

        function displaySearchResults(results, searchText) {
            searchResultsContainer.innerHTML = ""
            if (results.length === 0) {
                const noResultsElement = document.createElement("div")
                noResultsElement.classList.add("search-result", "no-results")
                noResultsElement.textContent = "No results found"
                searchResultsContainer.appendChild(noResultsElement)
            } else {
                results.forEach((result) => {
                    const resultElement = document.createElement("div")
                    resultElement.classList.add("search-result")

                    const parts = result.title.split(" > ")
                    let titleHTML = ""

                    parts.forEach((part, index) => {
                        if (index > 0) {
                            titleHTML += `<span class="search-result-divider"> - </span>`
                        }
                        const partClass = index === 0 ? "search-result-section" : "search-result-subsection"
                        titleHTML += `<span class="${partClass}">${part}</span>`
                    })

                    resultElement.innerHTML = `${titleHTML}${result.context ? ": " + result.context : ""}`

                    resultElement.addEventListener("click", () => {
                        searchResultsContainer.innerHTML = ""
                        scrollToSectionOrSubsection(result.id)
                        displayPromptMessage("Start typing to search the documentation")
                    })

                    searchResultsContainer.appendChild(resultElement)
                })
            }
        }

        function displayPromptMessage(message) {
            searchResultsContainer.innerHTML = ""
            const messageElement = document.createElement("div")
            messageElement.classList.add("search-result", "prompt-message")
            messageElement.textContent = message
            searchResultsContainer.appendChild(messageElement)
        }

        searchInput.addEventListener("focus", () => {
            searchResultsContainer.style.display = "block"
        })
        searchInput.addEventListener("blur", (event) => {
            setTimeout(() => {
                searchResultsContainer.style.display = "none"
            }, 200)
        })

        function scrollToSectionOrSubsection(id) {
            let sectionId = null
            let isSubsection = false
            Object.keys(markdownSections).forEach((secId) => {
                if (markdownSections[secId].subsections && markdownSections[secId].subsections[id]) {
                    sectionId = secId
                    isSubsection = true
                } else if (markdownSections[id]) {
                    sectionId = id
                }
            })

            if (sectionId) {
                if (isSubsection) {
                    updateMainContent(sectionId, markdownSections, () => {
                        simulateSubsectionClick(id)
                    })
                } else {
                    updateMainContent(sectionId, markdownSections)
                }
            } else {
                console.error("No matching section or subsection found for ID:", id)
            }
            searchInput.value = ""
            searchResultsContainer.innerHTML = ""
        }
    })
})
