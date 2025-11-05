import { env } from '$env/dynamic/public';
import { appVersion } from '$lib/utils/appInfo';
import { H } from 'highlight.run';

// Use dynamic public env so build doesn't fail when the variable is not set at build time.
const PUBLIC_HIGHLIGHT_PROJECT_ID = env.PUBLIC_HIGHLIGHT_PROJECT_ID ?? '';

if (location.hostname !== 'localhost' && PUBLIC_HIGHLIGHT_PROJECT_ID) {
    H.init(PUBLIC_HIGHLIGHT_PROJECT_ID, {
        environment: 'production',
        version: appVersion,
        tracingOrigins: true,
        networkRecording: {
            enabled: true,
            recordHeadersAndBody: true
        }
    });
}
