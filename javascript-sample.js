/*((state, timeLeftFn) => {
    const turnDirections = ['right', 'left', 'about-face'];
    const turnDirection = turnDirections[Math.floor(Math.random() * 3)];

    const smokeDirections = ['forward', 'backward', 'left', 'right', 'drop'];
    const smokeDirection = smokeDirections[Math.floor(Math.random() * 5)];

    const index = Math.floor(Math.random() * 17);
    const command = index < 10 ?
        { action: 'move', metadata: {} } :
        index < 12 ?
            { action: 'turn', metadata: { direction: turnDirection } } :
            index < 16 ?
                { action: 'shoot', metadata: {} } :
                { action: 'smoke', metadata: { direction: smokeDirection } };

    return {
        command,
        state: {
            hello: 'world'
        }
    };
}); */

((state, timeLeftFn) => {

   var counter = state['saved-state'].counter || 0;
   var command = { action: '', metadata: {} };
   
   const turnDirections = ['right', 'left'/*, 'about-face'*/];
   const turnDirection = turnDirections[Math.floor(Math.random() * 2)];
   
   if (counter === 0)
   {
        command = { action: 'move', metadata: {} };
        counter++;
   }
   else if (counter === 1)
   {
        command = { action: 'move', metadata: {} };
        counter++;
   }
    else if (counter === 2)
   {
        command = { action: 'move', metadata: {} };
        counter++;
   }
   else if (counter === 3)
   {
        command = { action: 'smoke', metadata: {} };
        counter++;
   }
   else if (counter === 4)
   {
        command = { action: 'turn', metadata: {direction: turnDirection} };
        counter++;
   }
   else 
    {
        command = { action: 'shoot', metadata: {} };
        counter = 0;
   }
   
    return {
        command,
        state: {
            counter: counter,
        }
    };
});


