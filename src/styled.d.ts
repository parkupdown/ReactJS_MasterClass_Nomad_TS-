// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    //여기가 내가 사용할 테마
    textColor: string;
    bgcolor: string;
    accentColor: string;
  }
}
