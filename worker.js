var cronJob = require('cron').CronJob;
var i = 0;
var job = new cronJob({
  cronTime: '1 * * * * *',
  onTick: function() {
    console.log(new Date());
  },
  start: true,
  timeZone: "Asia/Bangkok"
});