// package  com.word;

// import com.facebook.react.ReactActivity;
// import com.facebook.react.ReactActivityDelegate;
// import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
// import com.facebook.react.defaults.DefaultReactActivityDelegate;

// public class MainActivity extends ReactActivity {

//   /**
//    * Returns the name of the main component registered from JavaScript. This is used to schedule
//    * rendering of the component.
//    */


//   @Override
//   protected String getMainComponentName() {
//     return "Agent";
//     // return "Word";
//   }

//   /**
//    * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
//    * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
//    * (aka React 18) with two boolean flags.
//    */
//   @Override
//   protected ReactActivityDelegate createReactActivityDelegate() {
//     return new DefaultReactActivityDelegate(
//             this,
//             getMainComponentName(),
//             // If you opted-in for the New Architecture, we enable the Fabric Renderer.
//             DefaultNewArchitectureEntryPoint.getFabricEnabled());
//   }
// }
// ;

// import com.facebook.react.ReactActivity;
// import com.facebook.react.ReactActivityDelegate;
// import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
// import com.facebook.react.defaults.DefaultReactActivityDelegate;

// public class MainActivity extends ReactActivity {

//   /**
//    * Returns the name of the main component registered from JavaScript. This is used to schedule
//    * rendering of the component.
//    */


//   @Override
//   protected String getMainComponentName() {
//     return "Agent";
//     // return "Word";
//   }

//   /**
//    * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
//    * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
//    * (aka React 18) with two boolean flags.
//    */
//   @Override
//   protected ReactActivityDelegate createReactActivityDelegate() {
//     return new DefaultReactActivityDelegate(
//         this,
//         getMainComponentName(),
//         // If you opted-in for the New Architecture, we enable the Fabric Renderer.
//         DefaultNewArchitectureEntryPoint.getFabricEnabled());
//   }
// }


package com.word;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "word";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }
}
