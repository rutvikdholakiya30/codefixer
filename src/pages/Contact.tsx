import { useState } from 'react';
import { motion } from 'framer-motion'; 
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
        // Show specific error details if available
        setErrorMessage(data.details || data.error || 'Something went wrong. Please try again.');
        console.error('Submission Error:', data);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to connect to the server. Please check your internet.');
    }
  };

  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="py-32 px-6 relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-glow-blue opacity-30 -z-10" />
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 text-xs font-bold uppercase tracking-widest"
          >
            <MessageSquare className="w-3.5 h-3.5 text-primary" />
            <span>Get in Touch</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black font-heading tracking-tight"
          >
            Let's Start a <br />
            <span className="text-gradient">Conversation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/40 max-w-2xl mx-auto font-medium"
          >
            Have a question or want to start a project? We'd love to hear from you. Get in touch with our team today.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-heading">Get in Touch</h2>
              <p className="text-muted-foreground">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 glass rounded-3xl border-primary/10">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className="text-sm text-muted-foreground">+91 7600196034 / 8140428671</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 glass rounded-3xl border-primary/10">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p className="text-sm text-muted-foreground">sumitcode1207@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 glass rounded-3xl border-primary/10">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Visit Us</h4>
                  <p className="text-sm text-muted-foreground">211 Silver Empire, Uttran, Surat, (Guj) - 394105</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 glass rounded-3xl border-primary/10">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass border-none shadow-2xl rounded-[2.5rem] overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {status === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 text-center space-y-4 bg-green-500/10 rounded-3xl border border-green-500/20"
                    >
                      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                      <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                      <p className="text-white/60">Thank you for reaching out. We'll get back to you soon.</p>
                      <Button type="button" variant="outline" onClick={() => setStatus('idle')} className="rounded-xl border-white/10 hover:bg-white/5">Send Another Message</Button>
                    </motion.div>
                  ) : (
                    <>
                      {status === 'error' && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500 text-sm">
                          <AlertCircle className="w-5 h-5" />
                          {errorMessage}
                        </div>
                      )}
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold ml-1">Full Name</label>
                          <Input 
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe" 
                            className="rounded-2xl h-14 bg-white/5 border-white/10 focus:bg-white/10 focus:border-primary transition-all text-white" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold ml-1">Email Address</label>
                          <Input 
                            id="email"
                            type="email" 
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com" 
                            className="rounded-2xl h-14 bg-white/5 border-white/10 focus:bg-white/10 focus:border-primary transition-all text-white" 
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold ml-1">Phone Number</label>
                          <Input 
                            id="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 00000 00000" 
                            className="rounded-2xl h-14 bg-white/5 border-white/10 focus:bg-white/10 focus:border-primary transition-all text-white" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold ml-1">Subject</label>
                          <Input 
                            id="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Project Inquiry" 
                            className="rounded-2xl h-14 bg-white/5 border-white/10 focus:bg-white/10 focus:border-primary transition-all text-white" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold ml-1">Your Message</label>
                        <Textarea 
                          id="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project..." 
                          className="rounded-3xl min-h-[150px] bg-white/5 border-white/10 focus:bg-white/10 focus:border-primary transition-all p-6 text-white" 
                        />
                      </div>
                      <Button 
                        type="submit"
                        disabled={status === 'loading'}
                        size="lg" 
                        className="w-full rounded-2xl h-16 text-lg font-bold shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2"
                      >
                        {status === 'loading' ? (
                          <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                        ) : (
                          <>Send Message <Send className="w-5 h-5" /></>
                        )}
                      </Button>
                    </>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5 glass h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.043518596!2d72.873238375262!3d21.230113980468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f6797777777%3A0x7777777777777777!2sSilver%20Empire!5e0!3m2!1sen!2sin!4v1713082468000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            title="CodeFixer Office Location"
          ></iframe>
        </div>
      </section>

    </div>
  );
}