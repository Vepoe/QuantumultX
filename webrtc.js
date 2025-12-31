// 禁用标准的 WebRTC 接口
Object.defineProperty(navigator, 'RTCPeerConnection', { value: undefined });
Object.defineProperty(navigator, 'webkitRTCPeerConnection', { value: undefined });
Object.defineProperty(navigator, 'mozRTCPeerConnection', { value: undefined });
// 移除 mediaDevices 探测
if (navigator.mediaDevices) {
    Object.defineProperty(navigator.mediaDevices, 'enumerateDevices', { value: undefined });
}
$done({});
