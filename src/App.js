import React, { useState } from 'react';
import { experience } from './experience'
import { education } from './education'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

function App() {

	const [profile, setProfile] = useState(true);   
	const [resume, setResume] = useState(false);
	const [portfolio, setPortfolio] = useState(false);
	const [contacts, setContacts] = useState(false);
	const [category, setCategory] = useState('all');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [sendResult, setSendResult] = useState('');

	const handleProfileClick = () => {
		setProfile(!profile);
	}
	const handleResumeClick = () => {
		setResume(!resume);
	}
	const handlePortfolioClick = () => {
		setPortfolio(!portfolio);
	}
	const handleContactsClick = () => {
		setContacts(!contacts);
	}
	const filterClickHandler = (cat) => {
        setCategory(cat);
    }
	const handleNameChange = (e) => {
        setName(e.target.value);
    }
	const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
	const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }
	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (name && email && message) {
			const templateParams = {
				from_name: name + " (" + email + ")",
				reply_to: email,
				message: message
			};
			// eslint-disable-next-line no-undef
			emailjs
				.send("gmail", "website_contact", templateParams)
				.then(
					function(response) {
						setSendResult('Your message has been successfully sent!');
						console.log("SUCCESS!", response.status, response.text);
					},
					function(err) {
						setSendResult('Your message hasn\'t been sent!');
						console.error('Your message hasn\'t been sent!');
					}
				);
				setName('');
				setEmail('');
				setMessage('');
		}
	}

	const contactInfo = {
        address: 'Russia, Moscow',
        phone: '+7 925 1522219',
        whatsapp: '+66 945359849',
        email: 'saratovskaya.business@gmail.com',
        website: 'www.irinasaratovskaya.com',
	};

	return (
		<div className="hfeed site" id="page">
			<div className="container">
				<div className="row">
					<div className="col col-xl-10 offset-xl-1">
						<header role="banner" className="site_header" id="header">
							<div className="social_links">
								<ul>
									<li className="lnkd">
										<a href="https://www.linkedin.com/in/irina-saratovskaya/" target="_blank" rel="noopener noreferrer" title="Linkedin">
											<i className="fab fa-linkedin"></i>
										</a>
									</li>
									<li className="git">
										<a href="https://github.com/IrinaSaratovskaya" target="_blank" rel="noopener noreferrer" title="Github">
											<i className="fab fa-github"></i>
										</a>
									</li>
								</ul>
							</div>
						</header>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col col-xl-10 offset-xl-1">
						<div id="main" >
							<div className="content_area" id="primary">
								<div role="main" className="site_content" id="content">

									<section className="section profile_section first" id="profile">
										<div className={`section_header profile_section_header ${profile ? 'opened' : ''}`}>
											<h2 className="section_title profile_section_title vis" onClick={handleProfileClick}>
												<a>
													<span className="icon folder_icon"><i className="fas fa-user"></i></span>
													<span className="section_name">Profile</span>
												</a>
												<span className="section_icon"></span>
											</h2>
											<div id="profile_header">
												<div className="row">
													<div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-3 offset-md-0 col-lg-2 profile_img">
														<div id="profile_photo">
															<img src={'/images/profile_pic4.jpg'} alt="Irina Saratovskaya" />
														</div>
													</div>
													<div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-3 offset-md-0 col-lg-5">
														<div id="profile_name_area">
															<div id="profile_name">
																<h1 id="profile_title" class="text-center text-md-left">IRINA SARATOVSKAYA</h1>
																<h4 id="profile_position" class="text-center text-md-left">Frontend Developer</h4>
															</div>
														</div>
													</div>
													<div className="col-12 d-flex justify-content-center col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-5">
														<div id="profile_data">
															<div className="profile_row name"> 
																<span className="th">Name:</span>
																<span className="td">Irina Saratovskaya</span> 
															</div>
															<div className="profile_row birth"> 
																<span className="th">Date of birth:</span>
																<span className="td">February 26, 1986</span> 
															</div>
															<div className="profile_row address"> 
																<span className="th">Address:</span>
																<span className="td">{contactInfo.address}</span>
															</div>
															<div className="profile_row phone"> 
																<span className="th">Phone:</span>
																<span className="td">{contactInfo.phone}</span>
															</div>
                                                            <div className="profile_row phone"> 
																<span className="th">WhatsApp:</span>
																<span className="td">{contactInfo.whatsapp}</span> 
															</div>
															<div className="profile_row email"> 
																<span className="th">Email:</span>
																<span className="td">
																	<a href = "mailto: saratovskaya.business@gmail.com">{contactInfo.email}</a>
																</span> 
															</div>
															<div className="profile_row website"> 
																<span className="th">Website:</span>
																<span className="td">
																	<a target="_blank" href="www.irinasaratovskaya.com">{contactInfo.website}</a>
																</span> 
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className={`section_body profile_section_body ${profile ? '' : 'closed'}`}>
											<div className="row">
												<div className="col-12">
													<div className="proile_body text-justify"> 
													<p className="profile_text">I am a result-oriented professional with 13 years of experience in various areas, including IT and Blockchain projects, working in business development, sales, software development, software testing, and translation & localization (English, Korean, and Russian).</p>
													<p className="profile_text">I believe that being passionate about everything we do, in both our professional and private life, is a key to success. Three years ago, interested in the constantly evolving world and its trends, I moved to the IT and Blockchain industry, where I continued my career and gained knowledge about innovative technologies and various methods of their implementation.</p>
													<p className="profile_text">My love for technologies led me to learn Frontend Development on my own and explore ways in which I could be a part of this new virtual world. I completed several courses (400+ hours) as well as practiced under the mentoring of a Senior Developer from Silicon Valley. Currently, I am working as a part-time Freelance Developer in a Nutrition startup, as well as working on my own projects.</p>
													<p>I am open to new opportunities that could give me a chance to work on diverse, challenging projects while developing my skills.</p>
													</div>
												</div>
											</div>
										</div>
									</section>
									<div id="mainpage_accordion_area"> 
										<section className={`section resume_section ${resume ? 'open' : ''}`}>
											<div className="resume_buttons">
												<a target="_blank" className="resume_link_download" href="/images/Irina Saratovskaya (Frontend Developer).pdf">
													<span className="label">Download</span>
													<span className="icon">
														<i class="far fa-arrow-alt-circle-down"></i>
													</span>
												</a>
											</div>
											<div className="section_header resume_section_header">
												<h2 className={`section_title resume_section_title ${resume ? 'current' : ''}`} onClick={handleResumeClick} >
													<a>
														<span className="icon folder_icon"><i class="fas fa-align-left"></i></span>
														<span className="section_name res">Resume</span>
													</a>
													<span className="section_icon"></span>
												</h2>
											</div>
											<div className="section_body resume_section_body">
												<div className="row">
													<div className="col-12 col-md-8">
														<div className="wrapper resume_wrapper">
															<div className="category resume_category resume_category_1 first">
																<div className="category_header resume_category_header">
																	<h3 className="category_title"><span className="category_title_icon aqua"></span>Professional Experience</h3>
																</div> 
																<div className="category_body resume_category_body">
                                                                    {experience.map(exp => {
                                                                        return (
                                                                            <article className="post resume_post resume_post_1 first">
                                                                                <div className="post_header resume_post_header">
                                                                                    <div className="resume_period"> 
                                                                                        <span className="period_from period_to">{exp.years}</span> 
                                                                                    </div>
                                                                                    <h4 className="post_title">
                                                                                        <span className="post_title_icon aqua"></span>{exp.company}
                                                                                    </h4>
                                                                                    <h5 className="post_subtitle">{exp.position}</h5>
                                                                                </div>
                                                                                <div className="post_body resume_post_body">
                                                                                    <p>Responsibilities:</p>
                                                                                    <ul className="resume-justify">
                                                                                        {exp.responsibiliies.map(resp => {
                                                                                            return <li>{resp}</li>
                                                                                        })}
                                                                                    </ul>
                                                                                    {!!exp.achievements && (
                                                                                        <>
                                                                                            <p>Key achievements:</p>
                                                                                            <p className="resume-justify">{exp.achievements}</p>
                                                                                        </>
                                                                                    )}
                                                                                </div>
                                                                            </article>
                                                                        )
                                                                    })}
																</div>
															</div>
															<div className="category resume_category resume_category_2">
																<div className="category_header resume_category_header">
																	<h3 className="category_title">
																		<span className="category_title_icon green"></span>Education
																	</h3>
																</div>
																<div className="category_body resume_category_body">
                                                                    {education.map(ed => {
                                                                        return (
                                                                            <article className="post resume_post resume_post_1 first">
                                                                                <div className="post_header resume_post_header">
                                                                                    <div className="resume_period"> 
																						<span className="period_from period_to">{ed.years}</span>
																					</div>
                                                                                    <h4 className="post_title">
                                                                                        <span className="post_title_icon green"></span> {ed.institution}
                                                                                    </h4>
                                                                                    <h5 className="post_subtitle ed_subtitle">{ed.subject}</h5>
                                                                                </div>
                                                                                <div className="post_body resume_post_body">
                                                                                    <p>{ed.description}</p>
                                                                                </div>
                                                                            </article>
                                                                        )
                                                                    })}
																</div>
															</div>
														</div>
													</div>
													<div className="col-12 col-md-4">
														<div className="sidebar resume_sidebar">
                                                            <aside className="widget widget_skills">
                                                                <h3 className="widget_title">Programming skills</h3>
                                                                <div className="widget_inner style_1">
                                                                    <div className="skills_row first">
                                                                        <span className="caption">HTML</span>
                                                                        <span className="progressbar">
                                                                            <span className="prog blue" style={{width: '90%'}}>
                                                                                <span className="value">90%</span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    <div className="skills_row">
                                                                        <span className="caption">CSS</span>
                                                                        <span className="progressbar">
                                                                            <span className="prog aqua" style={{width: '90%'}}>
                                                                                <span className="value">90%</span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    <div className="skills_row">
                                                                        <span className="caption">Javascript</span>
                                                                        <span className="progressbar">
                                                                            <span className="prog green" style={{width: '90%'}}>
                                                                                <span className="value">90%</span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    <div className="skills_row">
                                                                        <span className="caption">React.js</span>
                                                                        <span className="progressbar">
                                                                            <span className="prog yellow" style={{width: '85%'}}>
                                                                                <span className="value">85%</span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    <div className="skills_row">
                                                                        <span className="caption">SQL</span>
                                                                        <span className="progressbar">
                                                                            <span className="prog red" style={{width: '80%'}}>
                                                                                <span className="value">80%</span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
																	<div className="skills_row">
                                                                        <span className="caption">Node.js</span>
                                                                        <span className="progressbar">
                                                                            <span className="prog aqua" style={{width: '20%'}}>
                                                                                <span className="value">20%</span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </aside>     
                                                            <aside className="widget widget_skills">
                                                                <h3 className="widget_title">Technology Tools</h3>
                                                                <div className="widget_inner style_2">
                                                                    <div className="skills_row">
																		<span className="legend blue"></span>
																		<span className="caption">MS Office</span>
																	</div>
                                                                    <div className="skills_row">
																		<span className="legend aqua"></span>
																		<span className="caption">SmartCAT</span>
																	</div>
                                                                    <div className="skills_row">
																		<span className="legend yellow"></span>
																		<span className="caption">MemoQ</span>
																	</div>
                                                                    <div className="skills_row">
																		<span className="legend red"></span>
																		<span className="caption">Git</span>
																	</div>
                                                                    <div className="skills_row">
																		<span className="legend red"></span>
																		<span className="caption">npm</span>
																	</div>
                                                                </div>
                                                            </aside>
                                                            <aside className="widget widget_skills">
																<h3 className="widget_title">Collaboration Tools</h3>
																<div className="widget_inner style_2">
																	<div className="skills_row">
																		<span className="legend blue"></span>
																		<span className="caption">Jira</span>
																	</div>
																	<div className="skills_row">
																		<span className="legend blue"></span>
																		<span className="caption">Trello</span>
																	</div>
																	<div className="skills_row">
																		<span className="legend aqua"></span>
																		<span className="caption">Asana</span>
																	</div>
																	<div className="skills_row">
																		<span className="legend green"></span>
																		<span className="caption">Zoho</span>
																	</div>
																	<div className="skills_row">
																		<span className="legend yellow"></span>
																		<span className="caption">Slack</span>
																	</div>
																	<div className="skills_row">
																		<span className="legend red"></span>
																		<span className="caption">Zoom</span>
																	</div>
																	<div className="skills_row">
																		<span className="legend red"></span>
																		<span className="caption">Pipedrive</span>
																	</div>
																</div>
                                                            </aside>
                                                            <aside className="widget widget_skills" >
                                                                <h3 className="widget_title">Language skills</h3>
                                                                <div className="widget_inner style_3">
                                                                    <div className="skills_row first">
                                                                        <span className="caption">English</span>
                                                                        <span className="progressbar">
                                                                            <span style={{width: '83%'}} className="prog aqua"></span>
                                                                        </span>
                                                                    </div>
                                                                    <div className="skills_row">
                                                                        <span className="caption">Korean</span>
                                                                        <span className="progressbar">
                                                                            <span style={{width: '83%'}} className="prog yellow"></span>
                                                                        </span>
                                                                    </div>
                                                                    <div className="skills_row">
                                                                        <span className="caption">Russian</span>
                                                                        <span className="progressbar">
                                                                            <span style={{width: '100%'}} className="prog green"></span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </aside>
														</div>
													</div>
												</div>
											</div>
										</section>
										<section className={`section portfolio_section ${portfolio ? 'open' : ''}`}>
											<div className="section_header portfolio_section_header">
												<h2 className={`section_title portfolio_section_title ${portfolio ? 'current' : ''}`} onClick={handlePortfolioClick} >
													<a>
														<span className="icon folder_icon">
															<i className="fas fa-briefcase"></i>
														</span>
														<span className="section_name por">Portfolio</span>
													</a>
													<span className="section_icon"></span>
												</h2>
											</div>
											<div className="section_body portfolio_section_body">
												<div className="row">
													<div className="col">
														<div className="portfolio_wrapper">
															<ul id="portfolio_iso_filters">
																<li onClick={() => filterClickHandler('all')}>
																	<a className={category === 'all'? 'current' : ''}>All</a>
																</li>
																<li onClick={() => filterClickHandler('web')}>
																	<a className={category === 'web'? 'current' : ''}>Web</a>
																</li>
																<li onClick={() => filterClickHandler('app')}>
																	<a className={category === 'app'? 'current' : ''}>App</a>
																</li>
															</ul>
															<div className="portfolio_items">
																<div className="row">
																	{(category === 'web' || category === 'all') && (
																		<div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-4">
																			<article className="post portfolio_post category_5">
																				<div className="post_pic portfolio_post_pic"> 
																					<a className="w_hover img-link img-wrap"> 
																						<span className="overlay"></span> 
																						<span className="link-icon"></span> 
																						<img src="/images_post/my_website.png" alt="Personal website" /> 
																					</a> 
																				</div>
																				<h4 className="post_title">
																					<a href="https://github.com/IrinaSaratovskaya/personal-website">Personal website</a>
																				</h4>
																				<h5 className="post_subtitle">Web</h5>
																			</article>
																		</div>
																	)}
																	{(category === 'app' || category === 'all') && (
																		<div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-4">
																			<article className="post portfolio_post category_5">
																				<div className="post_pic portfolio_post_pic"> 
																					<a className="w_hover img-link img-wrap"> 
																						<span className="overlay"></span> 
																						<span className="link-icon"></span> 
																						<img src="/images_post/comp_dir.png" alt="Company Directory" /> 
																					</a> 
																				</div>
																				<h4 className="post_title">
																					<a href="https://github.com/IrinaSaratovskaya/company-directory">Company Directory</a>
																				</h4>
																				<h5 className="post_subtitle">App</h5>
																			</article>
																		</div>
																	)}
																	{(category === 'app' || category === 'all') && (
																		<div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-4">
																			<article className="post portfolio_post category_5">
																				<div className="post_pic portfolio_post_pic"> 
																					<a className="w_hover img-link img-wrap"> 
																						<span className="overlay"></span> 
																						<span className="link-icon"></span> 
																						<img src="/images_post/to_do_list.png" alt="To Do List" /> 
																					</a> 
																				</div>
																				<h4 className="post_title">
																					<a href="https://github.com/IrinaSaratovskaya/to-do-list">To Do List</a>
																				</h4>
																				<h5 className="post_subtitle">App</h5>
																			</article>
																		</div>
																	)}
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</section>
										<section className={`section contact_section ${contacts ? 'open' : ''}`}>
											<div className="section_header contact_section_header">
												<h2 className={`section_title contact_section_title ${contacts ? 'current' : ''}`} onClick={handleContactsClick}>
													<a>
														<span className="icon folder_icon">
															<i className="fas fa-envelope"></i>
														</span>
														<span className="section_name section_name_contacts con">Contacts</span>
													</a>
													<span className="section_icon"></span>
												</h2>
											</div>
											<div className="section_body contact_section_body">
												<div className="row">
													<div className="col-12 col-lg-8 mb30">
														<div id="googlemap_data">
															<div style={{width: '100%', height: '294px'}} className="sc_googlemap">
																<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d575625.8357807054!2d37.01740544266339!3d55.69701229338654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2sid!4v1592571419246!5m2!1sen!2sid" width="810" height="294" frameborder="0" style={{border: 0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
															</div>
														</div>
													</div>
													<div className="col-12 col-lg-4 mb30">
														<div className="add_info">
															<div className="row">
																<div className="col-12 col-sm-8 col-lg-12">
																	<div className="profile_row header "> Contact info </div>
																	<div className="profile_row address"> 
																		<span className="th">
																			<i className="fas fa-home"></i>
																		</span>
																		<span className="td">{contactInfo.address}</span> 
																	</div>
																	<div className="profile_row phone"> 
																		<span className="th">
																			<i className="fas fa-mobile-alt"></i>
																		</span>
																		<span className="td">{contactInfo.phone}</span> 
																	</div>
																	<div className="profile_row wa"> 
																		<span className="th">
																			<i className="fab fa-whatsapp"></i>
																		</span>
																		<span className="td">{contactInfo.whatsapp}</span> 
																	</div>
																	<div className="profile_row email"> 
																		<span className="th">
																			<i className="far fa-envelope"></i>
																		</span>
																		<span className="td">
																			<a href = "mailto: saratovskaya.business@gmail.com">{contactInfo.email}</a>
																		</span> 
																	</div>
																	<div className="profile_row website"> 
																		<span className="th">
																			<i className="fas fa-globe"></i>
																		</span>
																		<span className="td">
																			<a target="_blank" href="www.irinasaratovskaya.com">{contactInfo.website}</a>
																		</span> 
																	</div>
																</div>
																<div className="col-4 d-none d-md-block d-lg-none">
																	<aside className="widget widget_qrcode_vcard" id="qrcode-vcard-widget-2">
																		<h3 className="widget_title">VCARD</h3>
																		<div className="widget_inner">
																			<div className="qrcode">
																				<img src="/images/Irina_Saratovskaya_QR_Code.png" alt="QR Code" />
																			</div>
																		</div>
																	</aside>
																</div>
															</div>
														</div>
													</div>
													<div className="col-12 col-lg-8">
														<div className="contact_form">
															<div className="contact_form_data">
																<div className="sc_contact_form">
																	<h3 className="title">Let's keep in touch</h3>
																	<form onSubmit={handleFormSubmit}> 
																		<div className="field">
																			<label className="required" for="contact_form_username">Name</label>
																			<input 
																				type="text"
																				id="contact_form_username"
																				value={name}
																				name={name}
																				onChange={handleNameChange}
																				required
																			/>
																		</div>
																		<div className="field">
																			<label className="required" for="contact_form_email">Email</label>
																			<input
																				type="email"
																				id="contact_form_email"
																				value={email}
																				name={email}
																				onChange={handleEmailChange}
																				required
																			/>
																		</div>
																		<div className="field message">
																			<label className="required" for="contact_form_message">Your Message</label>
																			<textarea
																				id="contact_form_message"
																				value={message}
																				name={message}
																				onChange={handleMessageChange}
																				required
																			></textarea>
																		</div>
																		<button type="submit" className="button">Submit</button>
																	</form>
																	<div className="result sc_infobox">{sendResult}</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-4 offset-md-0 d-block d-md-none d-lg-block">
														<div className="sidebar contact_sidebar">
															<aside className="widget widget_qrcode_vcard" id="qrcode-vcard-widget-2">
																<h3 className="widget_title">VCARD</h3>
																<div className="widget_inner">
																	<div className="qrcode">
                                                                        <img src="/images/Irina_Saratovskaya_QR_Code.png" alt="QR Code" />
                                                                    </div>
																</div>
															</aside>
														</div>
													</div>
												</div>
											</div>
										</section>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer role="contentinfo" className="site_footer">
				<div className="container">
					<div className="row">
						<div className="col col-xl-10 offset-xl-1">
							<div className="footer_copyright"> Irina Saratovskaya &copy; 2020 All Rights Reserved </div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
