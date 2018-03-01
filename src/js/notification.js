function notify(message) {
    alert(message);
};

function log(message) {
    console.log('------------------------------------');
    console.log(message);
    console.log('------------------------------------');
};

export default {
    notify: notify,
    log: log
};