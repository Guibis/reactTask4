import { useState } from 'react'
export default function App() {
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">User Feedback</h1>
        
        <form>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input 
              type="text" 
              id="userName" 
              className="input-field"
              placeholder="Enter your name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea 
              id="comment" 
              className="textarea-field"
              placeholder="Share your thoughts..."
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        </form>

        <div className="preview-section">
          <h3 className="preview-header">Live Preview</h3>
          <div className="preview-content">
            <p><strong>User Name:</strong> {userName || '...'}</p>
            <p><strong>Comment:</strong> {comment || '...'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
