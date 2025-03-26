import { useMediaQuery } from "@mui/material";



export function Overlay() {
  // Media queries for responsiveness
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 900px)");
  const fontSize = isSmallScreen ? 36 : isMediumScreen ? 48 : 72;
  const lineHeight = isSmallScreen ? "40px" : isMediumScreen ? "50px" : "60px";
  const bottomSpacing = isSmallScreen ? 150 : isMediumScreen ? 100 : 100;
  return (
    <div
      style={{
        position: "absolute",
        top: 50,
        left: 0,
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
      {/* Top Heading */}
      <p
        style={{
          fontFamily: "'Arial Black', sans-serif",
          fontSize,
          fontWeight: 700,
          lineHeight,
          color: "black",
          textAlign: "center",
          marginBottom: isSmallScreen ? "20px" : "20px",
          textShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)", // Drop shadow
          
        }}
      >
        AROSSOBENCH
      </p>

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
          UNDER CONSTRUCTION
        </p>
      </div>
    </div>
  );
  }