import React, { useState, useEffect } from 'react';
import './AiForm.css'; 
import FacebookPost from '../FacebookPost/FacebookPost';
import InstagramPost from '../InstagramPost/InstagramPost';
import TikTokPost from '../TikTokPost/TikTokPost';
import XPost from '../XPost/XPost';
import LinkedInPost from '../LinkedInPost/LinkedinPost';
import { FaClipboard, FaExternalLinkAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const toneOptions = [
    { label: 'Casual 😊', value: 'casual' },
    { label: 'Professional 👔', value: 'professional' },
    { label: 'Conversational 🗣️', value: 'conversational' },
    { label: 'Friendly 🤗', value: 'friendly' },
    { label: 'Humorous 😂', value: 'humorous' },
    { label: 'Authoritative 📜', value: 'authoritative' },
    { label: 'Sarcastic 😏', value: 'sarcastic' },
    { label: 'Emotional 😢', value: 'emotional' },
    { label: 'Storytelling 📖', value: 'storytelling' },
    { label: 'Creative 🎨', value: 'creative' },
    { label: 'Engaging 📣', value: 'engaging' },
    { label: 'Inspirational 🌟', value: 'inspirational' },
];

const AiForm = ({ buttonText, selectedPlatform }) => {
    const [postTopic, setPostTopic] = useState('');
    const [imagePrompt, setImagePrompt] = useState('');
    const [toneOfVoice, setToneOfVoice] = useState('');
    const [generatedPost, setGeneratedPost] = useState('');
    const [generatedImageUrl, setGeneratedImageUrl] = useState(''); 
    const [generatedHeadline, setGeneratedHeadline] = useState(''); 
    const [errorMessage, setErrorMessage] = useState(''); 
    const [loading, setLoading] = useState(false); 
    const [isPostGenerated, setIsPostGenerated] = useState(false); 
    const [isImageGenerated, setIsImageGenerated] = useState(false);



    const copyHeadlineToClipboard = () => {
        navigator.clipboard.writeText(generatedHeadline).then(() => {
            toast.success("Headline copied to clipboard!", {
                autoClose: 3000, 
            });
        }).catch(err => {
            toast.error("Failed to copy content.");
        });
    };

    const copyContentToClipboard = () => {
        navigator.clipboard.writeText(generatedPost).then(() => {
            toast.success("Post content copied to clipboard!", {
                autoClose: 3000, 
            });
        }).catch(err => {
            toast.error("Failed to copy content.");
        });
    };

    const openImageInNewTab = () => {
        if (generatedImageUrl) {
            window.open(generatedImageUrl, '_blank');
        } else {
            toast.error("No image available to open.");
        }
    };
    

    useEffect(() => {
        setIsPostGenerated(false);
    }, []);


    /*Facebook UseEffect*/
    useEffect(() => {
        const facebookPostContainer = document.querySelector('.facebook-post');
        
        if (facebookPostContainer) {
            if (isPostGenerated && isImageGenerated) {
                facebookPostContainer.classList.add('generated-active');
                facebookPostContainer.classList.remove('generated-passive');
            } else {
                facebookPostContainer.classList.add('generated-passive');
                facebookPostContainer.classList.remove('generated-active');
            }
        }
    }, [isPostGenerated, isImageGenerated]);

    /*Instagram UseEffect*/
    useEffect(() => {
        const instagramPostContainer = document.querySelector('.instagram-post');
        
        if (instagramPostContainer) {
            if (isPostGenerated && isImageGenerated) {
                instagramPostContainer.classList.add('generated-active');
                instagramPostContainer.classList.remove('generated-passive');
            } else {
                instagramPostContainer.classList.add('generated-passive');
                instagramPostContainer.classList.remove('generated-active');
            }
        }
    }, [isPostGenerated, isImageGenerated]);

    /*TikTok UseEffect*/
    useEffect(() => {
        const tiktokPostContainer = document.querySelector('.tiktok-post');
        
        if (tiktokPostContainer) {
            if (isPostGenerated && isImageGenerated) {
                tiktokPostContainer.classList.add('generated-active');
                tiktokPostContainer.classList.remove('generated-passive');
            } else {
                tiktokPostContainer.classList.add('generated-passive');
                tiktokPostContainer.classList.remove('generated-active');
            }
        }
    }, [isPostGenerated, isImageGenerated]);

    /*X UseEffect*/
    useEffect(() => {
        const xPostContainer = document.querySelector('.x-post');
        
        if (xPostContainer) {
            if (isPostGenerated && isImageGenerated) {
                xPostContainer.classList.add('generated-active');
                xPostContainer.classList.remove('generated-passive');
            } else {
                xPostContainer.classList.add('generated-passive');
                xPostContainer.classList.remove('generated-active');
            }
        }
    }, [isPostGenerated, isImageGenerated]);


    /*LinkedIn UseEffect*/
    useEffect(() => {
        const LednInPostContainer = document.querySelector('.linkedin-post');
        
        if (LednInPostContainer) {
            if (isPostGenerated && isImageGenerated) {
                LednInPostContainer.classList.add('generated-active');
                LednInPostContainer.classList.remove('generated-passive');
            } else {
                LednInPostContainer.classList.add('generated-passive');
                LednInPostContainer.classList.remove('generated-active');
            }
        }
    }, [isPostGenerated, isImageGenerated]);

    const handleGeneratePost = async () => {
        // Reset error message
        setErrorMessage('');
        
        if (!postTopic.trim() && !toneOfVoice) {
            setErrorMessage("Please enter your post topic and set a tone of voice.");
            return;
        }
        if (!postTopic.trim()) {
            setErrorMessage("Please enter your post topic.");
            return;
        }
        if(!imagePrompt.trim()) {
            setErrorMessage("Please enter an image prompt."); 
            return;
        }
        if (!toneOfVoice) {
            setErrorMessage("Please select a tone of voice.");
            return;
        }


        const getArticle = (tone) => {
            const vowels = ['a', 'e', 'i', 'o', 'u'];
            return vowels.includes(tone[0].toLowerCase()) ? 'an' : 'a';
        };


        /*Image prompt size adjustment based on platform selected*/


        // Define the resolutions
        const tiktokResolution = `9:16 aspect ratio that is a longer portrait image`;
        const facebookResolution = `1:1 aspect ratio and a resolution of 1080x1080 pixels`;
        const instagramResolution = `4:5 aspect ratio and a resolution of 1080x1350 pixels`;
        const xResolution = `16:9 aspect ratio and a resolution of 1200x675 pixels`;
        const linkedinResolution = `1.91:1 aspect ratio and a resolution of 1200x627 pixels`;

        // Select the appropriate resolution based on the platform
        let resolution;
        switch (selectedPlatform) {
            case 'TikTok':
                resolution = tiktokResolution;
                break;
            case 'Facebook':
                resolution = facebookResolution;
                break;
            case 'Instagram':
                resolution = instagramResolution;
                break;
            case 'X':
                resolution = xResolution;
                break;
            case 'LinkedIn':
                resolution = linkedinResolution;
                break;
            default:
                resolution = 'default resolution'; 
        }

        // Generate prompts
        const generateImagePrompt = `Generate a ${selectedPlatform} image on the topic of "${imagePrompt}" with ${resolution}, using ${getArticle(toneOfVoice)} ${toneOfVoice} tone.`;
        const post = `Generate a ${selectedPlatform} post on the topic "${postTopic}" with ${getArticle(toneOfVoice)} ${toneOfVoice} tone.`;
        const prompt = post.replace("Your prompt is: ", "").trim();
        const sanitizedPostTopic = postTopic.replace(/"/g, '').replace(/'/g, '');
        const generateHeadlinePrompt = `Create a catchy headline for a ${selectedPlatform} post about ${sanitizedPostTopic} with a ${getArticle(toneOfVoice)} ${toneOfVoice} tone.`;
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        setLoading(true);
        setGeneratedPost('Generating your post...'); 
        setIsPostGenerated(false); 
        setIsImageGenerated(false);

        try {

            // Generate headline
            const headlineResponse = await fetch('/api/generate-headline', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: JSON.stringify({ prompt: generateHeadlinePrompt }),
            });

            const headlineData = await headlineResponse.json();
            if (headlineResponse.ok) {
                setGeneratedHeadline(headlineData.headline); 
            } else {
                setErrorMessage("Error generating headline: " + (headlineData.error || "Unknown error"));
            }


            // Generate post
            const postResponse = await fetch('/api/generate-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken, 
                },
                body: JSON.stringify({ prompt }),
            });

            const postData = await postResponse.json();
            if (postResponse.ok) {
                setGeneratedPost(postData.post); 
                setIsPostGenerated(true);
                // Now generate the image
                const imageResponse = await fetch('/api/generate-image', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                    },
                    body: JSON.stringify({ prompt: generateImagePrompt }),
                });

                const imageData = await imageResponse.json();
                if (imageResponse.ok) {
                    setGeneratedImageUrl(imageData.image_url); 
                    setIsImageGenerated(true);
                } else {
                    setErrorMessage("Error generating image: " + (imageData.error || "Unknown error"));
                }
            } else {
                setErrorMessage("Error generating post: " + (postData.message || "Unknown error"));
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("An error occurred while generating the post.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-label">Enter Your Post Topic</h2>
            <input
                type="text"
                placeholder="Digital Marketing, Social Media, Branding, Content Marketing"
                value={postTopic}
                onChange={(e) => setPostTopic(e.target.value)}
                className="post-topic-input"
            />
            <h2 className="form-label">Enter Image Prompt</h2>
            <input
                type="text"
                placeholder="Visualize a high-quality placeholder image for an e-commerce website."
                value={imagePrompt}
                onChange={(e) => setImagePrompt(e.target.value)} 
                className="post-topic-input"
            />
            <h2 className="form-label">Tone of Voice</h2>
            <select 
                value={toneOfVoice} 
                onChange={(e) => setToneOfVoice(e.target.value)} 
                className="tone-dropdown"
            >
                <option value="" disabled>Select tone</option>
                {toneOptions.map((tone) => (
                    <option key={tone.value} value={tone.value}>
                        {tone.label}
                    </option>
                ))}
            </select>
            <button onClick={handleGeneratePost} className="generate-button action-button" disabled={loading}>
                {loading ? 'Generating...' : buttonText}
            </button>

            <div className="generated-post-block">
                {!isPostGenerated && !loading && <p>No posts generated yet.</p>} {/* New message */}
                {loading && <p>Just a second, we are generating your {selectedPlatform} post.</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {isPostGenerated && isImageGenerated && (
                <p>
                    {document.getElementById('generated-content')?.classList.contains('generated-active') ? 
                    "Success! See your generated post below." : 
                    document.getElementById('generated-content')?.classList.contains('generated-passive') ?
                    "Generate another post." : null}
                </p>
                )}
            </div>

            <div>
                {selectedPlatform === 'Facebook' && (
                    <FacebookPost 
                        postContent={generatedPost} 
                        generatedImageUrl={generatedImageUrl}
                        generatedHeadline={generatedHeadline} 
                    />
                )}
                {selectedPlatform === 'Instagram' && (
                    <InstagramPost 
                        postContent={generatedPost} 
                        generatedImageUrl={generatedImageUrl}
                        generatedHeadline={generatedHeadline} 
                    />
                )}
                {selectedPlatform === 'TikTok' && (
                    <TikTokPost 
                    postContent={generatedPost} 
                    generatedImageUrl={generatedImageUrl}
                    generatedHeadline={generatedHeadline}
                    />
                )}
                {selectedPlatform === 'X' && (
                    <XPost 
                    postContent={generatedPost} 
                    generatedImageUrl={generatedImageUrl}
                    generatedHeadline={generatedHeadline}
                    />
                )}
                {selectedPlatform === 'LinkedIn' && (
                    <LinkedInPost 
                    postContent={generatedPost} 
                    generatedImageUrl={generatedImageUrl}
                    generatedHeadline={generatedHeadline}
                    />
                )}


                {isPostGenerated && isImageGenerated && (
                <div id="copy-buttons" className="task-button-group">
                    <button onClick={copyContentToClipboard} className="task-button copy-content-button">
                        <FaClipboard />
                        <span>Copy Content</span>
                    </button>
                    <button onClick={copyHeadlineToClipboard} className="task-button copy-title-button" >
                        <FaClipboard />
                        <span>Copy Title</span>
                    </button>
                    <button onClick={openImageInNewTab} className="task-button open-image-button">
                        <FaExternalLinkAlt />
                        <span>Open image in new tab</span>
                    </button>
                    <ToastContainer />
                </div>  
                )}

                {isPostGenerated && isImageGenerated && (
                    <p className="register-now-paragraph">
                        Try premium features where you can set your audience's age, geographic location, interest, store and edit your social media posts. 
                        <a href="/register" className="register-link">
                            Register now
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
};

export default AiForm;
