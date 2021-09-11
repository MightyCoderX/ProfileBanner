registerPaint('stars', class
{
    static get contextOptions() { return {alpha: true}; }

    paint(ctx, size, props, args)
    {
        const { width, height } = size;
        
        const starColors = ['#ffffff66', '#9dc4d166'];
        
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);

        Math.seedrandom('space');
        
        for(let i = 0; i < width/2; i++)
        {
            const x = Math.round(Math.random() * width);
            const y = Math.round(Math.random() * height);
            
            const randIndex = Math.floor(Math.random() * starColors.length);
            ctx.fillStyle = starColors[randIndex];
            ctx.lineWidth = 3;

            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, 2 * Math.PI, true);
            ctx.fill();
        }


        console.log(ctx, width, height);
    }
});