import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(TestFlightDetectorPlugin)
public class TestFlightDetectorPlugin: CAPPlugin {
    private let implementation = TestFlightDetector()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
    @objc func isTestFlight(_ call: CAPPluginCall) {
            let isTestFlight = Bundle.main.appStoreReceiptURL?.lastPathComponent == "sandboxReceipt"
            call.resolve(["isTestFlight": isTestFlight])
        }

}
 
    // @objc func getBundleIdentifier(_ call: CAPPluginCall) {
    //         let bundleIdentifier = Bundle.main.bundleIdentifier
    //         call.success(["bundleIdentifier": bundleIdentifier])
    //     }
