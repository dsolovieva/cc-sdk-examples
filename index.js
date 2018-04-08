const EXAMPLES = [
  {
    title: 'Getting Started',
    url: '1_getting_started.html',
    codeStr: `
    <head>
      <!-- Install default CarCode script in the head tag section -->
      <script> src="https://dev-dsg11-www.carcodesms.com/widgets/s/[WIDGET_ID].js" defer></script>;
    </head>
    `,
  },{
    title: 'SDK buttons',
    url: '2_sdk_buttons.html',
    codeStr: ` 
    <head>
      <!-- Install default CarCode script in the head tag section -->
      <script> src="https://dev-dsg11-www.carcodesms.com/widgets/s/[WIDGET_ID].js" defer></script>;
    </head>
    <body>
      ...
      <!-- Add button(s) to VDPs (vehicle details page) / SRPs (vehicle listings/search results pages)
      Replace all items in [brackets] with query that pulls or passes those items into the code. -->
      <button class="sms-button"
        data-make="[MAKE]" data-model="[MODEL]" data-vin="[VIN_CODE]"
        data-year="[YEAR]" data-status="[NEW_OR_USED]">
        Text us
      </button>
      ...
    </body>
    `,
  },{
    title: 'Theme Configuration',
    url: '3_theme_configuration.html',
    codeStr: `
    <head>
      <!-- Install default CarCode script in the head tag section -->
      <script> src="https://dev-dsg11-www.carcodesms.com/widgets/s/[WIDGET_ID].js" defer></script>;
    </head>
    `,
  },{
    title: 'SMS Form',
    url: '4_sdk_configuration_sms.html',
    codeStr: `
    <head>
      <!-- Install default CarCode script in the head tag section -->
      <script> src="https://dev-dsg11-www.carcodesms.com/widgets/s/[WIDGET_ID].js" defer></script>;
    </head>
    `,
  },{
    title: 'Chat Form',
    url: '5_sdk_configuration_chat.html',
    codeStr: `
    <head>
      <!-- Install default CarCode script in the head tag section -->
      <script> src="https://dev-dsg11-www.carcodesms.com/widgets/s/[WIDGET_ID].js" defer></script>;
    </head>
    `,
  }
];

const updateExample = () => {
  const exampleIndex = location.hash ? location.hash.substr(1) : 0;
  const titleEl = document.getElementById('exampleTitle');
  const frameEl = document.getElementById('exampleFrame');
  const codeEl = document.getElementById('exampleCode');

  titleEl.innerHTML = EXAMPLES[exampleIndex].title;
  frameEl.src = `examples/${EXAMPLES[exampleIndex].url}`;
  codeEl.innerHTML = EXAMPLES[exampleIndex].codeStr.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  hljs.highlightBlock(codeEl);
}
window.onload = updateExample;
window.onhashchange = updateExample;