"use client"

const videoDockerStyle = {
    position: 'relative' as const,
} as const

const videoStyle = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
} as const

const overlayStyle = {
    content: '""',
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1
} as const

export default function VideoHero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
            <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden" style={videoDockerStyle}>
                <video
                    className="min-w-full min-h-full absolute object-cover"
                    style={videoStyle}
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                    autoPlay
                    muted
                    loop
                />
                <div style={overlayStyle} />
            </div>
            <div className="video-content space-y-2 z-10">
                <h1 className="font-light text-6xl">Full Hero Video</h1>
                <h3 className="font-light text-3xl">with TailwindCSS</h3>
            </div>
        </section>
    )
}
