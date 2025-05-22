# Social Media Integration

This document provides information about Dr. Greg Pedro's social media presence and how it's integrated with the website.

## Social Media Accounts

Dr. Greg Pedro maintains a professional presence on several social media platforms:

- **Instagram**: [@gregpedromd](https://www.instagram.com/gregpedromd)
- **Facebook**: [Dr. Greg Pedro Dental](https://www.facebook.com/drgregpedro) (Example link)
- **LinkedIn**: [Dr. Greg Pedro](https://www.linkedin.com/in/drgregpedro) (Example link)

## Website Integration

The website integrates with these social media accounts in several ways:

### Footer Links

Social media icons in the footer link directly to Dr. Pedro's profiles:

```jsx
// Example implementation in Footer.tsx
const socialLinks = [
  { platform: 'instagram', url: 'https://www.instagram.com/gregpedromd', icon: <InstagramIcon /> },
  // Other social platforms...
];
```

### Instagram Feed

The homepage features recent posts from Dr. Pedro's Instagram account using the Instagram Basic Display API:

1. A serverless function securely makes authenticated requests to the Instagram API
2. The feed component displays a gallery of recent posts
3. Clicking on a post opens it directly on Instagram

### Social Sharing

Service pages include social sharing buttons to allow patients to share information about Dr. Pedro's specialized services:

```jsx
// Example implementation in ServiceDetailPage.tsx
const handleShare = (platform) => {
  const url = window.location.href;
  const title = `Dr. Greg Pedro - ${serviceName}`;
  
  switch(platform) {
    case 'instagram':
      // Open Instagram sharing (typically as a story)
      window.open(`instagram://library?AssetPath=${encodeURIComponent(imageUrl)}`);
      break;
    // Other platforms...
  }
};
```

## Content Strategy

The social media content strategy focuses on:

1. **Educational Content**: Sharing information about dental procedures and technology
2. **Before/After Results**: Showcasing successful cases (with patient consent)
3. **Practice Updates**: New technology, services, or events
4. **Team Highlights**: Introducing staff and creating a personal connection

## Implementation Details

### Authentication

Social media API authentication is handled securely through serverless functions to avoid exposing API keys or tokens in the frontend code.

### Instagram Basic Display API Integration

```javascript
// Example serverless function for Instagram feed
exports.handler = async (event, context) => {
  try {
    // Get access token from environment variables
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    
    // Fetch media from Instagram API
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`
    );
    
    const data = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error fetching Instagram feed' })
    };
  }
};
```

### Frontend Implementation

```jsx
// Example React component for Instagram feed
const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/.netlify/functions/instagram-feed');
        const data = await response.json();
        
        setPosts(data.data || []);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  // Render Instagram feed
  return (
    <Box>
      <Typography variant="h4">Follow Dr. Pedro on Instagram</Typography>
      <Typography variant="subtitle1">@gregpedromd</Typography>
      
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {posts.map(post => (
            <Grid item xs={6} md={4} key={post.id}>
              <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                <img 
                  src={post.media_url} 
                  alt={post.caption || 'Instagram post'} 
                  style={{ width: '100%', height: 'auto' }} 
                />
              </a>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
```

## Security Considerations

1. **API Keys and Tokens**:
   - Never store API keys, tokens, or credentials in the frontend code
   - Use environment variables and serverless functions to protect sensitive information
   - Rotate access tokens periodically

2. **User Privacy**:
   - Obtain proper consent before sharing patient images or information
   - Follow HIPAA guidelines for any patient-related content

3. **Content Moderation**:
   - Monitor comments and interactions on social media platforms
   - Respond professionally to all feedback, including negative comments

## Maintenance and Updates

To maintain the social media integration:

1. **Token Renewal**:
   - Instagram access tokens expire and need to be refreshed
   - Update the token in the Netlify environment variables when necessary

2. **API Changes**:
   - Social media platforms frequently update their APIs
   - Monitor for deprecation notices and update integration as needed

3. **Content Refreshing**:
   - Regularly update the featured Instagram posts on the website
   - Ensure content remains relevant and current
