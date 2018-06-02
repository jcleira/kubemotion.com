var waitForZopim = setInterval(function () {
  if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
      return;
  }
  $zopim(function() {
    $zopim.livechat.theme.setColor('#386AE8');
    $zopim.livechat.theme.setColors({badge: '#386AE8', primary: '#386AE8'});
    $zopim.livechat.theme.reload();
  });
  clearInterval(waitForZopim);
}, 100);
