import App from "next/app";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Component {...pageProps} />
        <style jsx global>{`
          @font-face {
            font-family: "Montserrat";
            src: url("/fonts/Montserrat-Regular.ttf");
            src: url("/fonts/Montserrat-ExtraLight.ttf");
          }
          @font-face {
            font-family: "Montserrat-Bold";
            src: url("/fonts/Montserrat-Bold.ttf");
          }
          @font-face {
            font-family: "FiraSans";
            src: url("/fonts/FiraSans-Regular.ttf");
            src: url("/fonts/FiraSans-Black.ttf");
            src: url("/fonts/FiraSans-ExtraLight.ttf");
          }
          @font-face {
            font-family: "FireSans-Bold";
            src: url("/fonts/FiraSans-Bold.ttf");
          }
        `}</style>
      </div>
    );
  }
}
export default MyApp;
