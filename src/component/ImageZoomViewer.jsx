import { useRef } from "react";

function ImageZoomViewer({ src }) 
{
  const imgRef = useRef(null);

  const handleMove = (e) => {
    const img = imgRef.current; 

    const rect = img.getBoundingClientRect(); 

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`; 
  };

  return (
    <div className="w-80 overflow-hidden rounded-xl shadow-md cursor-crosshair"
      onMouseMove={handleMove}
      onMouseEnter={() => (imgRef.current.style.transform = "scale(2)")}
      onMouseLeave={() => (imgRef.current.style.transform = "scale(1)")}
    >
      <img
        ref={imgRef}
        src={src}
        alt="zoom"
        className="w-full transition-transform duration-500 ease-out"
      />
    </div>
  );
}
export default ImageZoomViewer