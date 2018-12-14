const code = ``;
    const html = `
    <html>
    <body>
      <script>
        
        // Add Vidyo Libray Callback
        function onVidyoClientLoaded(status) {
          switch (status.state) {
            case "READY":
            
              // Create Vidyoconnector
              VC.CreateVidyoConnector({
                viewId: "renderer",
                viewStyle: "VIDYO_CONNECTORVIEWSTYLE_Default",
                remoteParticipants: 8,
                logFileFilter: "warning info@VidyoClient info@VidyoConnector",
                logFileName: "",
                userData: ""
              }).then(function (vidyoConnector) {

                //For acessing camera, microphone and speaker in chrome for latest vidyo library 4.1.24.15 register this device listener
                vidyoConnector.RegisterLocalCameraEventListener({
                  onAdded: function(localCamera) {
                    // New camera is available
                   },
                  onRemoved: function(localCamera) {
                    // Existing camera became unavailable
                   },
                  onSelected: function(localCamera) {
                    // Camera was selected/unselected by you or automatically
                    },
                  onStateUpdated: function(localCamera, state) {
                    // Camera state was updated
                  }
                }).then(function() {
                  console.log("RegisterLocalCameraEventListener Success");
                }).catch(function() {
                  console.error("RegisterLocalCameraEventListener Failed");
                });
                
                // Handle appearance and disappearance of microphone devices in the system
                vidyoConnector.RegisterLocalMicrophoneEventListener({
                  onAdded: function(localMicrophone) {
                    // New microphone is available
                   },
                  onRemoved: function(localMicrophone) {
                    // Existing microphone became unavailable
                  },
                  onSelected: function(localMicrophone) {
                    // Microphone was selected/unselected by you or automatically
                    },
                  onStateUpdated: function(localMicrophone, state) {
                    // Microphone state was updated
                  }
                }).then(function() {
                  console.log("RegisterLocalMicrophoneEventListener Success");
                }).catch(function() {
                  console.error("RegisterLocalMicrophoneEventListener Failed");
                });
                
                // Handle appearance and disappearance of speaker devices in the system
                vidyoConnector.RegisterLocalSpeakerEventListener({
                  onAdded: function(localSpeaker) {
                    // New speaker is available
                   },
                  onRemoved: function(localSpeaker) {
                    // Existing speaker became unavailable
                     },
                  onSelected: function(localSpeaker) {
                    // Speaker was selected/unselected by you or automatically
                  },
                  onStateUpdated: function(localSpeaker, state) {
                    // Speaker state was updated
                  }
                }).then(function() {
                  console.log("RegisterLocalSpeakerEventListener Success");
                }).catch(function() {
                  console.error("RegisterLocalSpeakerEventListener Failed");
                });

                // Add Token and Connect To Conference
                var token = "`+generateToken() +`";
                vidyoConnector.Connect({
                  host: "prod.vidyo.io",
                  token: token,
                  displayName: "user1", //User Name
                  resourceId: "demoroom", //Conference Name
                  onSuccess: function () {
                    console.log("Sucessfully connected");
                  },
                  onFailure: function (reason) {
                    console.log("Error while connecting ", reason);
                  },
                  onDisconnected: function (reason) {
                    console.log("Disconnected ", reason);
                  }
                }).then(function (status) {
    
                }).catch(function () {
    
                });
              });
              break;
            case "RETRYING":
              break;
            case "FAILED":
              break;
            case "FAILEDVERSION":
              break;
            case "NOTAVAILABLE":
              break;
          }
          return true;
        }
      </script>
      <div id="renderer" style="position: absolute; top: 41px; left: 3px; bottom: -23px; z-index: 99; height: 300px; width: 300px;"></div>
      <script src="https://static.vidyo.io/latest/javascript/VidyoClient/VidyoClient.js?onload=onVidyoClientLoaded&webrtc=true&plugin=false"></script>
    </body>
    </html>    
    `;

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