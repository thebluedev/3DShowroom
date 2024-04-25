import './down.css'
import Spline from '@splinetool/react-spline';

export default function Down() {
  return (
    <>
    <h2 className="maintextdown">
      This is an example of a virtual showroom
    </h2>
    <h3 className="maintextdown">
      Look there&apos;s even an iPhone for some reason...
    </h3>
    <div style={{ width: '100vw', height: '100vh' }}>
      <Spline 
        scene="https://prod.spline.design/REtq4QBkGniy5NEW/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
        />
    </div>
    </>
  );
}
