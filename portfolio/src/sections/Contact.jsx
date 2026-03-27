import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import SectionWrapper from '../components/SectionWrapper'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/aydaneng', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/aydaneng', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:aydan@example.com', label: 'Email' },
]

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition'
const errorClass = 'text-red-500 text-sm mt-1'

export default function Contact() {
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setStatus('loading')
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        data,
        'YOUR_PUBLIC_KEY'
      )
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <SectionWrapper id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto rounded" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Have a question, opportunity, or just want to say hi? My inbox is always open.
            </p>
            <div className="flex gap-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-2xl text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Right column — contact form */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className={inputClass}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className={errorClass}>{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className={inputClass}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address',
                  },
                })}
              />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className={inputClass}
                {...register('message', {
                  required: 'Message is required',
                  minLength: { value: 10, message: 'Message must be at least 10 characters' },
                })}
              />
              {errors.message && <p className={errorClass}>{errors.message.message}</p>}
            </div>

            {/* Status banners */}
            {status === 'success' && (
              <p className="text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-lg text-sm">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-lg text-sm">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  )
}
