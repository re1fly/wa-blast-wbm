const wbm = require('./src/index');

(async () => {
    await wbm.start({showBrowser: true}).then(async () => {
        const phones = ['6285156474847', '62895413548932'];
        const message = '.';
        await wbm.send(phones, message);
        await wbm.end();
    }).catch(err => console.log(err));

    // await wbm.start({showBrowser: true}).then(async () => {
    //     const contacts = [
    //         { phone: '62895413548932', name: 'refly', age: 21 },
    //         { phone: '6285156474847', name: 'dharma', age: 33 }
    //     ];
    //     const message = 'Hi {{name}}, your age is {{age}}';
        
    //     await wbm.send(contacts, message);
    //     await wbm.end();
    // }).catch(err => console.log(err));

    // await wbm.start().then(async () => {
    //     const contacts = [
    //         { phone: '5535988841854', name: 'Bruno', group: 'friend' },
    //         { phone: '5535988841854', name: 'Will', group: 'customer' }
    //     ];
    //     for (contact of contacts) {
    //         let message = 'hi';
    //         if (contact.group === 'customer') {
    //             message = 'Good morning ' + contact.name;
    //         }
    //         else if (contact.group === 'friend') {
    //             message = 'Hey ' + contact.name + '. Wassup?';
    //         }
    //         await wbm.sendTo(contact.phone, message);
    //     }
    //     await wbm.end();
    // }).catch(err => console.log(err));

    // await wbm.start().then(async () => {
    //     const contacts = [
    //         { phone: '5535988841854', name: 'Bruno' },
    //         { phone: '5535988841854', name: 'Will' }
    //     ];
    //     await wbm.send(contacts, 'Hey {{name}}');
    //     // Hey Bruno
    //     // Hey Will
    //     await wbm.end();
    // }).catch(err => { console.log(err); });

    // await wbm.start().then(async () => {
    //     await wbm.sendTo({ phone: '62895413548932', name: 'Bruno' }, 'Hey {{name}}');
    //     // send: Hey Bruno
    //     await wbm.sendTo('5535988841854', 'Hey man');
    //     // send: Hey man
    //     await wbm.end();
    // });
})();