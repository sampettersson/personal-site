

export const FontLight = "HostGrotesk-Light"
export const FontRegular = "HostGrotesk-Regular"
export const FontMedium = "HostGrotesk-Medium"
export const FontSemiBold = "HostGrotesk-SemiBold"
export const FontBold = "HostGrotesk-Bold"
export const FontExtraBold = "HostGrotesk-ExtraBold"

export const FontSetup = () => (
    <style>{`
        @font-face {
            font-family: '${FontRegular}';
            src: url('/fonts/HostGrotesk-Regular.woff2');
        }

        @font-face {
            font-family: '${FontLight}';
            src: url('/fonts/HostGrotesk-Light.woff2');
        }
        
        @font-face {
            font-family: '${FontMedium}';
            src: url('/fonts/HostGrotesk-Medium.woff2');
        }

        @font-face {
            font-family: '${FontSemiBold}';
            src: url('/fonts/HostGrotesk-SemiBold.woff2');
        }

        @font-face {
            font-family: '${FontBold}';
            src: url('/fonts/HostGrotesk-Bold.woff2');
        }

        @font-face {
            font-family: '${FontExtraBold}';
            src: url('/fonts/HostGrotesk-ExtraBold.woff2');
        }
      `}</style>
) 