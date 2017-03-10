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
