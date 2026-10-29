"use strict";
// Seed snapshot keeps direct file opening working without fetch.
const items = [
  {
    "section": "Tools",
    "name": "Luckin Coffee MCP",
    "note": "Official MCP for finding Luckin stores, matching coupons, ordering, and pickup codes in mainland China.",
    "link": "https://open.lkcoffee.com/",
    "tags": [
      "MCP",
      "China errands",
      "Food"
    ]
  },
  {
    "section": "Tools",
    "name": "DiDi MCP",
    "note": "Official DiDi MCP for fare estimates, ride-hailing, tracking, and cancel in mainland China.",
    "link": "https://mcp.didichuxing.com/",
    "tags": [
      "MCP",
      "China errands",
      "Transport"
    ]
  },
  {
    "section": "Tools",
    "name": "Amap MCP",
    "note": "Amap (Gaode) MCP for POI search, routes, and weather in China.",
    "link": "https://lbs.amap.com/api/mcp-server/gettingstarted",
    "tags": [
      "MCP",
      "China errands",
      "Maps"
    ]
  },
  {
    "section": "Tools",
    "name": "McDonald's China MCP",
    "note": "Official McDonald's China MCP for dine-in or McDelivery, coupons, and orders.",
    "link": "https://open.mcd.cn/mcp/",
    "tags": [
      "MCP",
      "China errands",
      "Food"
    ]
  },
  {
    "section": "Tools",
    "name": "Grok Bot Connectors Directory",
    "note": "Independent directory of MCP connectors for Grok Bot, with install methods and test status.",
    "link": "https://grokbot.tools/connectors",
    "tags": [
      "MCP",
      "Grok Bot",
      "Directory"
    ]
  },
  {
    "section": "Tools",
    "name": "Official MCP Registry",
    "note": "Centralized official registry of publicly available Model Context Protocol servers, with search API and install metadata.",
    "link": "https://registry.modelcontextprotocol.io/",
    "tags": [
      "MCP",
      "Directory",
      "Official"
    ]
  },
  {
    "section": "Tools",
    "name": "mcp.so",
    "note": "Community directory for discovering and browsing MCP servers across many categories.",
    "link": "https://mcp.so/",
    "tags": [
      "MCP",
      "Directory",
      "Community"
    ]
  },
  {
    "section": "Tools",
    "name": "Claude Connectors Directory",
    "note": "Anthropic's catalog of verified and community MCP connectors for Claude products.",
    "link": "https://claude.com/docs/connectors/directory",
    "tags": [
      "MCP",
      "Directory",
      "Claude"
    ]
  },
  {
    "section": "Examples",
    "name": "gippp69 7-bot launch team",
    "note": "Public write-up of a 7-bot Grok Bot team (Scout, Pain Miner, Judge, Builder, Pitch, Buyer, Chief) that launches ideas from X with one schedule.",
    "link": "https://teapawt.org/gippp69",
    "tags": [
      "Grok Bot",
      "Multi-agent",
      "Example"
    ]
  },
  {
    "section": "Examples",
    "name": "One-person company with AI agents",
    "note": "Guide to running a one-person company with specialized AI agents that draft while the human decides; includes operating numbers from a 114-day run.",
    "link": "https://bootstrappedmakers.com/blog/run-a-one-person-company-with-ai-agents",
    "tags": [
      "One-person company",
      "Example",
      "Ops"
    ]
  },
  {
    "section": "Examples",
    "name": "Maestro (open-source agent RevOps)",
    "note": "Open-source multi-agent RevOps platform: specialized sales/marketing agents with orchestration, CRM, and cost tracking.",
    "link": "https://github.com/MaestroAgent/maestro",
    "tags": [
      "Open source",
      "Multi-agent",
      "Example"
    ]
  },
  {
    "section": "Examples",
    "name": "Maestro marketing agents",
    "note": "Product site for Maestro's coordinated marketing-agent team (SEO, content, CRO, and more).",
    "link": "https://www.maestro.is/",
    "tags": [
      "Multi-agent",
      "Marketing",
      "Example"
    ]
  },
  {
    "section": "Examples",
    "name": "One Founder, Eight Agents",
    "note": "Solo founder using Grok Bot as Mission Control with Claude Code, Codex, and Cursor agents in parallel lanes; includes a 12-step setup you can copy.",
    "link": "https://jacobarcher.co/writing/one-founder-eight-agents",
    "tags": [
      "Grok Bot",
      "One-person company",
      "Example"
    ]
  },
  {
    "section": "Examples",
    "name": "Twelve Agents and a Founder (Paperclip)",
    "note": "HeatLens founder running twelve role-based AI agents as staff via Paperclip (open-source agent company tooling with org chart, budgets, and tickets).",
    "link": "https://danielcoakley.com/showcase/running-an-ai-driven-company",
    "tags": [
      "Multi-agent",
      "One-person company",
      "Example"
    ]
  },
  {
    "section": "Skills",
    "name": "What is an MCP connector",
    "note": "Plain-English primer on MCP connectors for Grok Bot (built-in plugins vs custom MCP URLs).",
    "link": "https://grokbot.tools/learn/what-is-an-mcp-connector",
    "tags": [
      "Skill",
      "MCP",
      "Grok Bot"
    ]
  },
  {
    "section": "Skills",
    "name": "Cursor Agent Skills",
    "note": "Official docs for Agent Skills: portable SKILL.md packages that teach agents specialized multi-step workflows (the pattern Grok Bot skills follow).",
    "link": "https://cursor.com/docs/skills",
    "tags": [
      "Skill",
      "Cursor",
      "Grok Bot"
    ]
  }
];

const search = document.querySelector('#search');
const tagFilter = document.querySelector('#tag-filter');
const directory = document.querySelector('#directory');
const descriptions = { Tools: 'Connect your agents to the real world.', Examples: 'See what people are building.', Skills: 'Give your agents a new capability.' };
const tags = [...new Set(items.flatMap(item => item.tags))].sort((a, b) => a.localeCompare(b));
for (const tag of tags) tagFilter.add(new Option(tag, tag));
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function render() {
  const query = search.value.trim().toLocaleLowerCase();
  const selected = tagFilter.value;
  const filtered = items.filter(item => (!selected || item.tags.includes(selected)) &&
    [item.name, item.note, item.section, ...item.tags].join(' ').toLocaleLowerCase().includes(query));
  directory.replaceChildren();
  ['Tools', 'Examples', 'Skills'].forEach((name, index) => {
    const matches = filtered.filter(item => item.section === name);
    const section = element('section', 'section');
    section.id = name.toLowerCase();
    section.setAttribute('aria-labelledby', `${section.id}-heading`);
    const heading = element('div', 'section-heading');
    const title = element('h2', '', name);
    title.id = `${section.id}-heading`;
    heading.append(element('span', 'section-number', `0${index + 1}`), title,
      element('span', 'section-count', String(matches.length)), element('span', 'section-description', descriptions[name]));
    const grid = element('div', 'grid');
    for (const item of matches) {
      const card = element('article', 'card');
      const top = element('div', 'card-top');
      const title = element('h3');
      if (item.link) {
        const link = element('a', 'resource-link', item.name);
        link.href = item.link;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `${item.name} (opens in new tab)`);
        title.append(link);
        const arrow = element('span', 'external', '↗');
        arrow.setAttribute('aria-hidden', 'true');
        top.append(title, arrow);
      } else {
        title.textContent = item.name;
        top.append(title);
      }
      card.append(top, element('p', '', item.note));
      const bottom = element('div', 'card-bottom');
      if (!item.link) bottom.append(element('span', 'tbd', 'Link TBD'));
      const tagList = element('div', 'tags');
      for (const tag of item.tags) {
        const button = element('button', `tag${tag === selected ? ' active' : ''}`, tag);
        button.type = 'button';
        button.setAttribute('aria-label', `Filter by tag: ${tag}`);
        button.setAttribute('aria-pressed', String(tag === selected));
        button.addEventListener('click', () => { tagFilter.value = tag; render(); });
        tagList.append(button);
      }
      bottom.append(tagList);
      card.append(bottom);
      grid.append(card);
    }
    section.append(heading, grid);
    section.hidden = matches.length === 0;
    directory.append(section);
  });
  document.querySelector('#results').textContent = `${filtered.length} of ${items.length} resources`;
  document.querySelector('#empty').hidden = filtered.length !== 0;
  document.querySelector('#clear').hidden = !query && !selected;
}
function reset() { search.value = ''; tagFilter.value = ''; render(); search.focus(); }
search.addEventListener('input', render);
tagFilter.addEventListener('change', render);
document.querySelector('#clear').addEventListener('click', reset);
document.querySelector('#reset').addEventListener('click', reset);
document.addEventListener('keydown', event => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) && !document.activeElement.isContentEditable) {
    event.preventDefault(); search.focus();
  }
});
render();
