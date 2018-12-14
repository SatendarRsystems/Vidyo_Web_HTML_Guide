const code = ``;
		const html = `<html>
<body>
	<script>
		
		// Add Vidyo Libray Callback
		
	</script>
	<div id="renderer" style="position: absolute; top: 41px; left: 3px; bottom: -23px; z-index: 99; height: 300px; width: 300px;"></div>
	<script src="https://static.vidyo.io/latest/javascript/VidyoClient/VidyoClient.js?onload=onVidyoClientLoaded&webrtc=true&plugin=false"></script>
</body>
</html>`;

const project = {
  files: {
    'index.js': code,
    'index.html': html
  },
  title: 'Vidyo workspace',
  description: 'Vidyo workspace',
  template: 'javascript',
  tags: ['stackblitz', 'sdk'],

  

};

const setting = {
  openFile: 'index.html', // Show a specific file on embed load
  view: 'preview' | 'editor',
  hideExplorer: true,
  hidedevtools: false,
  hideNavigation: true,
  forceEmbedLayout: true,
  height : '100%'
 }

setTimeout(() => {
  StackBlitzSDK.embedProject('myDiv', project, setting);
}, 1000);