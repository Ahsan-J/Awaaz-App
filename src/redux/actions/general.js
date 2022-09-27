export function setActiveRoute(activeRoute) {
    return {
        type: "SET_ACTIVE_ROUTE",
        activeRoute,
    }
}

export function setLoader(loader) {
    return {
        type: "SET_LOADER",
        loader,
    }
}

export function setUserId(userId) {
    return {
        type: "SET_USER_ID",
        userId
    }
}

export function setMACAddress(macAddress) {
    return {
        type: "SET_MAC_ADDRESS",
        macAddress,
    }
}

export function setDeviceID(deviceId) {
    return {
        type: "SET_DEVICE_ID",
        deviceId,
    }
}

export function setVersion(version) {
    return {
        type: "SET_VERSION",
        version,
    }
}
