import { useMediaQuery } from "@mui/material";



export function Overlay() {
  // Media queries for responsiveness
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 900px)");
  const fontSize = isSmallScreen ? 36 : isMediumScreen ? 48 : 72;
  const lineHeight = isSmallScreen ? "40px" : isMediumScreen ? "50px" : "60px";
  const bottomSpacing = isSmallScreen ? 100 : isMediumScreen ? 100 : 100;
  return (
    <div>
    <div
      style={{
        position: "absolute",
        top: isSmallScreen ? 0 : -50,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        pointerEvents: "none",
        padding: "10px",
        
      }}
    >
      <img src="./Assets/ARB_logo.png"  alignItems= "center" width={isSmallScreen ? "300": "500"} height={isSmallScreen ? "300": "500"}></img>
      </div>
      {/* Bottom Text */}
      <div
        style={{
          position: "absolute",
          bottom: bottomSpacing,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Arial Black', sans-serif",
            fontSize,
            fontWeight: 700,
            lineHeight,
            color: "black",
            textAlign: "center",
            textShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)", // Drop shadow
          }}
        >
          AROSSOBENCH
        </p>
      </div>
      </div>
  );
  }