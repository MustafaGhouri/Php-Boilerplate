var apiObj = null;

function BindEvent(){
    
    $("#btnHangup").on('click', function () {
        apiObj.executeCommand('hangup');
        
    });
    $("#btnCustomMic").on('click', function () {
        apiObj.executeCommand('toggleAudio');
    });
    $("#btnCustomCamera").on('click', function () {
        apiObj.executeCommand('toggleVideo');
    });
    $("#btnCustomTileView").on('click', function () {
        apiObj.executeCommand('toggleTileView');
    });
    $("#btnScreenShareCustom").on('click', function () {
        apiObj.executeCommand('toggleShareScreen');
    });
    $("#btnChat").on('click', function () {
        apiObj.executeCommand('toggleChat');
    });
    $("#btnCustomMuteevoryone").on('click', function () {
        apiObj.executeCommand('muteEveryone');
    });
  
}

function StartMeeting(roomName,title,dispNme,email,avatar,role){
    const domain = 'meet.jit.si';

    const options = {
        roomName: title,
        width: '100%',
        height: '100%',
        parentNode: document.querySelector('#jitsi-meet-conf-container'),
        DEFAULT_REMOTE_DISPLAY_NAME: 'New User',
        userInfo: {
            displayName: dispNme,
            email : email,
            avatarURL: avatar,
            role: `${role}`
        },
        configOverwrite:{
            doNotStoreRoom: true,
             enableWelcomePage: false,
             prejoinPageEnabled: false,
             remoteVideoMenu: {
                 disableKick: false
            },
            remoteVideoMenu: {
                 disableKick: true
            },
        },
        localRecording: {
     enabled: false,
     format: 'flac',
     },
        interfaceConfigOverwrite: {
            SHOW_BRAND_WATERMARK:false,
            SHOW_JITSI_WATERMARK: false,
            SHOW_WATERMARK_FOR_GUESTS: false,
            SHOW_CHROME_EXTENSION_BANNER: false, 
            DEFAULT_BACKGROUND: '#000',
            DEFAULT_LOGO_URL: 'https://edyogis.com/uploads/setting/logo.png',
            CHAT_EDIT_MESSAGE_BACKGROUND : "#000",
            SHOW_POWERED_BY:false,
            TOOLBAR_BUTTONS: [ 'raisehand','microphone','tileview','camera','mute-everyone','mute-video-everyone','shareaudio','sharedvideo','localrecording']
        },
        onload: function () {
            $('#joinMsg').hide();
            $('#container').show();
            $('#toolbox').show();
        }
    };
    apiObj = new JitsiMeetExternalAPI(domain, options);

    apiObj.addEventListeners({
        readyToClose: function (data) {
            $('#jitsi-meet-conf-container').empty();
            $('#toolbox').hide();
            $('#container').hide();
            $('#joinMsg').show().text('Meeting Ended');
        },
        audioMuteStatusChanged: function (data) {
            if(data.muted)
                $("#btnCustomMic").html('<i class="mdi mdi-microphone-off"></i>');
            else
                $("#btnCustomMic").html('<i class="mdi mdi-microphone"></i>');
        },
        videoMuteStatusChanged: function (data) {
            if(data.muted)
                $("#btnCustomCamera").html('<i class="mdi mdi-camera-off"></i>');
            else
                $("#btnCustomCamera").html('<i class="mdi mdi-camera"></i>');
        },
        tileViewChanged: function (data) {
            
        },
        screenSharingStatusChanged: function (data) {
            if(data.on)
                $("#btnScreenShareCustom").html('<i class="mdi mdi-share-off"></i>');
            else
                $("#btnScreenShareCustom").html('<i class="mdi mdi-share"></i>');
        },
        participantJoined: function(data){
            console.log('participantJoined', data);
        },
        participantLeft: function(data){
            console.log('participantLeft', data);
        }
    });
    
    apiObj.executeCommand('subject', 'New Room 2');
}

