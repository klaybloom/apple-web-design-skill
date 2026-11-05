import * as React from 'react';

const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');

/* ---------- Button ---------- */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = graphite fill, once per view · secondary = sunken fill · plain = text only · danger = destructive */
  variant?: 'primary' | 'secondary' | 'plain' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Optional leading icon (an inline SVG drawn with currentColor). */
  icon?: React.ReactNode;
}
/** The one button. Secondary is the default; primary at most once per view. */
export function Button({ variant = 'secondary', size = 'md', icon, className, children, type = 'button', ...rest }: ButtonProps) {
  return (
    <button {...rest} type={type} className={cx('fly-btn', 'fly-btn--' + variant, 'fly-btn--' + size, !children && 'fly-btn--icon', className)}>
      {icon ? <span className="fly-btn__icon" aria-hidden="true">{icon}</span> : null}
      {children}
    </button>
  );
}

/* ---------- TextField ---------- */
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  hint?: string;
  error?: string;
}
/** A labelled single-line input with an optional hint or error underneath. */
export function TextField({ label, hint, error, id, className, ...rest }: TextFieldProps) {
  const auto = React.useId();
  const fid = id || 'fly-tf-' + auto;
  const note = error || hint;
  return (
    <div className={cx('fly-field', error && 'fly-field--error', className)}>
      <label className="fly-field__label" htmlFor={fid}>{label}</label>
      <input {...rest} id={fid} className="fly-field__input" aria-invalid={error ? true : undefined} aria-describedby={note ? fid + '-note' : undefined} />
      {note ? <p className="fly-field__note" id={fid + '-note'}>{error ? <span aria-hidden="true">⚠︎ </span> : null}{note}</p> : null}
    </div>
  );
}

/* ---------- SegmentedControl ---------- */
export interface SegmentedControlProps {
  options: Array<{ value: string; label: string }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: 'sm' | 'md';
  'aria-label'?: string;
}
/** Two to five mutually exclusive views or filters, switched in place. */
export function SegmentedControl({ options, value, defaultValue, onChange, size = 'md', ...aria }: SegmentedControlProps) {
  const [inner, setInner] = React.useState(defaultValue ?? options[0]?.value);
  const current = value ?? inner;
  const idx = Math.max(0, options.findIndex(o => o.value === current));
  const pick = (v: string) => { if (value === undefined) setInner(v); onChange?.(v); };
  const onKey = (e: React.KeyboardEvent) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (idx + d + options.length) % options.length;
    pick(options[n].value);
    const btns = (e.currentTarget as HTMLElement).querySelectorAll('button');
    (btns[n] as HTMLElement | undefined)?.focus();
  };
  return (
    <div role="radiogroup" aria-label={aria['aria-label']} className={cx('fly-seg', 'fly-seg--' + size)} onKeyDown={onKey}
      style={{ ['--fly-seg-n' as any]: options.length, ['--fly-seg-i' as any]: idx }}>
      <span className="fly-seg__thumb" aria-hidden="true" />
      {options.map((o, i) => (
        <button key={o.value} type="button" role="radio" aria-checked={i === idx} tabIndex={i === idx ? 0 : -1}
          className={cx('fly-seg__item', i === idx && 'is-selected')} onClick={() => pick(o.value)}>{o.label}</button>
      ))}
    </div>
  );
}

/* ---------- Switch ---------- */
export interface SwitchProps {
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}
/** An immediate on/off setting with its label on the left. */
export function Switch({ label, checked, defaultChecked = false, disabled, onChange }: SwitchProps) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => { if (disabled) return; if (checked === undefined) setInner(!on); onChange?.(!on); };
  return (
    <label className={cx('fly-switch', disabled && 'is-disabled')}>
      <span className="fly-switch__label">{label}</span>
      <button type="button" role="switch" aria-checked={on} disabled={disabled} className={cx('fly-switch__track', on && 'is-on')} onClick={toggle}>
        <span className="fly-switch__knob" />
      </button>
    </label>
  );
}

/* ---------- Badge ---------- */
export interface BadgeProps {
  tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  children?: React.ReactNode;
}
/** One or two words of status; the word carries the meaning, colour only supports it. */
export function Badge({ tone = 'neutral', children }: BadgeProps) {
  return <span className={'fly-badge fly-badge--' + tone}>{children}</span>;
}

/* ---------- Card ---------- */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  /** Controls placed at the top right of the card header. */
  actions?: React.ReactNode;
  as?: 'section' | 'article' | 'div';
}
/** A stable, opaque content surface. Never glass. */
export function Card({ title, subtitle, actions, as = 'section', className, children, ...rest }: CardProps) {
  const Tag = as as any;
  return (
    <Tag {...rest} className={cx('fly-card', className)}>
      {title || actions ? (
        <header className="fly-card__head">
          <div>
            {title ? <h3 className="fly-card__title">{title}</h3> : null}
            {subtitle ? <p className="fly-card__subtitle">{subtitle}</p> : null}
          </div>
          {actions ? <div className="fly-card__actions">{actions}</div> : null}
        </header>
      ) : null}
      <div className="fly-card__body">{children}</div>
    </Tag>
  );
}

/* ---------- Toolbar ---------- */
export interface ToolbarProps {
  title?: string;
  subtitle?: string;
  /** Leading slot: back button, sidebar toggle. */
  leading?: React.ReactNode;
  /** Centre slot: a SegmentedControl or a search field. */
  center?: React.ReactNode;
  /** Trailing slot: actions, at most one primary. */
  trailing?: React.ReactNode;
  /** bar = full-width top bar; floating = capsule over content. */
  variant?: 'bar' | 'floating';
}
/** The glass chrome layer: navigation and actions floating above content. */
export function Toolbar({ title, subtitle, leading, center, trailing, variant = 'bar' }: ToolbarProps) {
  return (
    <div role="toolbar" aria-label={title} className={cx('fly-toolbar', 'fly-toolbar--' + variant)}>
      <div className="fly-toolbar__start">
        {leading}
        {title ? (
          <div className="fly-toolbar__titles">
            <span className="fly-toolbar__title">{title}</span>
            {subtitle ? <span className="fly-toolbar__subtitle">{subtitle}</span> : null}
          </div>
        ) : null}
      </div>
      {center ? <div className="fly-toolbar__center">{center}</div> : null}
      <div className="fly-toolbar__end">{trailing}</div>
    </div>
  );
}
