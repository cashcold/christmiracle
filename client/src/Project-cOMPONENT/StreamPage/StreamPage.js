import React, { Component } from 'react';

class StreamPage extends Component {
    render() {
        const { match, location } = this.props;
        
        // Extract stream title from URL
        const streamTitle = match.params.streamTitle.replace(/-/g, ' ');

        // Extract query parameters (event time & message title)
        const searchParams = new URLSearchParams(location.search);
        const eventTime = searchParams.get('time');
        const messageTitle = searchParams.get('message');

        return (
            <div className="stream-page">
                <h1>Welcome to {streamTitle}</h1>
                <p>📅 Streaming starts from {eventTime}</p>
                <p>📖 Today's message title: <strong>{messageTitle}</strong></p>

                {/* Embedded YouTube Live Stream */}
                <iframe
                    width="100%"
                    height="500px"
                    src="https://www.youtube.com/embed/live_stream?channel=YOUR_YOUTUBE_CHANNEL_ID"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Live Stream"
                ></iframe>
            </div>
        );
    }
}

export default StreamPage;
