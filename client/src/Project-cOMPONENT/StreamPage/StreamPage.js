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
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61558159893848%2Fvideos%2F2076605492784666%2F&show_text=false&width=267&t=0"
                width="267"
                height="476"
                style={{ border: "none", overflow: "hidden" }}  // ✅ Corrected
                scrolling="no"
                frameBorder="0"  // ✅ Use camelCase
                allowFullScreen={true}  // ✅ Use {true} instead of "true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />


            </div>
        );
    }
}

export default StreamPage;