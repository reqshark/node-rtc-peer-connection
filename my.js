var iceServers = {
  iceServers: [
    "stun.l.google.com:19302",
    //"stun1.l.google.com:19302",
    //"stun2.l.google.com:19302",
    //"stun3.l.google.com:19302",
    //"stun4.l.google.com:19302",
    //"stun.ekiga.net",
    //"stun.ideasip.com",
    //"stun.schlund.de",
    //"stun.stunprotocol.org:3478",
    //"stun.voiparound.com",
    //"stun.voipbuster.com",
    //"stun.voipstunt.com",
    //"stun.voxgratia.org",
    //"stun.services.mozilla.com"
  ].map(function (url) {
    return {
      urls: 'stun:' + url,
    };
  }),
};
