registerPaint('starshipWindows', class
{
    static get contextOptions() { return {alpha: true}; }

    paint(ctx, size, props, args)
    {
        const { width, height } = size;

        const windowSize = width/18;
        const windowGap = { x: width/20, y: 1 };

        const gap = width/2.1;

        ctx.fillStyle = '#111';

        const offset = { x: windowSize+windowGap.x, y: windowSize+windowGap.y };

        for(let x = 0; x < width-gap-offset.x; x+=offset.x)
        {
            for(let y = 0; y < height-offset.y; y+=offset.y)
            {
                ctx.fillRect(x, y, windowSize, windowSize);
            }
        }

        ctx.beginPath();
        ctx.moveTo(width, windowGap.x);
        ctx.lineTo(width-gap, windowGap.x);
        ctx.lineTo(width-gap, height-windowGap.x);
        ctx.lineTo(width, height-windowGap.x)
        ctx.closePath();
        ctx.fill();
    }
});