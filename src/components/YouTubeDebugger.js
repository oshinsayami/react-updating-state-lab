// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                    video: {
                    resolution: '1080p'
                        }   
                }
        }
    }

    editBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }   
        })
    }

    editResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.editBitrate} className="bitrate">Edit Bitrate</button>
                <button onClick={this.editResolution} className="resolution">Edit Resolution</button>

            </div>
        )
    }
}