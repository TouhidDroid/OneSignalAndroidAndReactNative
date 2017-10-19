package com.awesomeproject;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by touhid on 10/19/2017.
 * bismillah :)
 */

public class InCallModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    public InCallModule(ReactApplicationContext reactContext) {
        super(reactContext);
        InCallModule.reactContext = reactContext;
        // reactContext.addActivityEventListener(this);
    }

    public static void sendEvent(String event, WritableNativeMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(event, params);
    }

    @Override
    public String getName() {
        return InCallModule.class.getSimpleName();
    }
}