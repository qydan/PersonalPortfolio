import useScrollProgress from '../hooks/useScrollProgress'

export default function ScrollProgressBar() {
  const progress = useScrollProgress()

  return (
    <div
      className="fixed bg-red-500"
      style={{ top: 0, left: 0, width: `${progress}%`, height: '3px', zIndex: 100 }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  )
}
