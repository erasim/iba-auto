# Facebook Video Embed Troubleshooting

## Why Videos Might Not Show

### 1. Video Privacy Settings
- Facebook videos/reels must be set to **Public** to be embedded
- Check video settings: Go to the video → Settings → Privacy → Set to Public

### 2. Development Environment (localhost)
- Facebook embeds may not work on `localhost:3000`
- Test the embed on a deployed site or use `ngrok` for testing
- The video should work in production

### 3. Browser Console Errors
- Open browser DevTools (F12) → Console tab
- Look for errors like:
  - "Refused to display in a frame"
  - "X-Frame-Options" errors
  - CORS errors

### 4. Video URL Format
- Ensure the URL is correct: `https://www.facebook.com/reel/1403509070847327/`
- The URL should end with `/`
- Try copying the embed code directly from Facebook

## How to Get Facebook Video Embed Code

1. Go to your Facebook video/reel
2. Click the three dots (...) menu
3. Select "Embed" or "Copy embed code"
4. Copy the iframe code
5. Use the `src` URL from that code

## Alternative: Direct Link Display

If embedding doesn't work, you can:
1. Display a thumbnail image
2. Add a "Watch on Facebook" button
3. Link directly to the video

## Testing

1. Check browser console for errors
2. Verify video is public on Facebook
3. Test on deployed site (not localhost)
4. Try the direct Facebook link to confirm video is accessible

