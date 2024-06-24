/**
 * v0 by Vercel.
 * @see https://v0.dev/t/avAPI06Vl9w
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Component(props: {
  player: Player
}) {
  return (
    <div className="w-full max-w-sm bg-background rounded-xl overflow-hidden shadow-lg">
      <div className="relative">
        <img src="/placeholder.svg" alt="Player Image" width={600} height={400} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
          Active
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">{props.player.name}</h3>
            <p className="text-sm text-muted-foreground">{props.player.team}</p>
          </div>
          <div className="bg-muted px-3 py-1 rounded-full text-sm font-medium">
            <span className="text-primary">+{props.player.pts}</span> PTS
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted rounded-md p-3 text-center">
            <p className="text-sm text-muted-foreground">Previous</p>
            <p className="text-2xl font-bold">{props.player.pts}</p>
          </div>
          <div className="bg-muted rounded-md p-3 text-center">
            <p className="text-sm text-muted-foreground">Expected</p>
            <p className="text-2xl font-bold">{props.player.expected}</p>
          </div>
        </div>
      </div>
    </div>
  )
}