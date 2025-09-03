import * as React from "react";

/* Tiny presentational atoms, centralized for readability & nicer defaults */

export function Row({
  children,
  align,
  gap = 12,
  wrap = false,
  style,
}: {
  children: React.ReactNode;
  align?: "center" | "baseline" | "start" | "end";
  gap?: number;
  wrap?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: align ?? "center",
        gap,
        flexWrap: wrap ? "wrap" : "nowrap",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Card({
  title,
  right,
  children,
}: {
  title: string;
  right?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 16,
        boxShadow: "0 1px 4px rgba(0,0,0,.06)",
        marginBottom: 14,
      }}
    >
      <Row>
        <h3 style={{ margin: 0, fontSize: 16 }}>{title}</h3>
        <div style={{ marginLeft: "auto" }}>{right}</div>
      </Row>
      <div style={{ marginTop: 10 }}>{children}</div>
    </div>
  );
}

export function Button({
  children,
  onClick,
  disabled,
  variant = "primary",
  style,
  title,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  style?: React.CSSProperties;
  title?: string;
}) {
  const base: React.CSSProperties = {
    borderRadius: 10,
    padding: "8px 12px",
    cursor: disabled ? "not-allowed" : "pointer",
    border: "1px solid",
    fontSize: 14,
    lineHeight: 1.1,
  };
  const variants: Record<string, React.CSSProperties> = {
    primary: { background: "#3346ff", color: "#fff", borderColor: "#3346ff" },
    secondary: { background: "#eef0ff", color: "#1a1a1a", borderColor: "#d7dcff" },
    ghost: { background: "transparent", color: "#3346ff", borderColor: "transparent" },
  };
  return (
    <button
      title={title}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
    </button>
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
  width = 240,
  style,
  type = "text",
}: {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  width?: number;
  style?: React.CSSProperties;
  type?: "text" | "number";
  // support extra props (e.g., min for number)
  [key: string]: any;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: "10px 12px",
        borderRadius: 10,
        border: "1px solid #cfd3e6",
        width,
        color: "#111",
        background: "#fff",
        ...style,
      }}
    />
  );
}

// ...other imports/exports stay the same

export function Select(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & { width?: number }
) {
  const { width, style, ...rest } = props;
  return (
    <select
      {...rest}
      style={{
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        background: "#fff",
        color: "#1a1a1a",
        border: "1px solid #c9c9d4",
        borderRadius: 10,
        padding: "10px 12px",
        width: width ?? 180,
        lineHeight: 1.2,
        outline: "none",
        boxShadow: "0 1px 2px rgba(0,0,0,.04) inset",
        ...style,
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = "#6b7bff";
        e.currentTarget.style.boxShadow =
          "0 0 0 3px rgba(80, 102, 255, .15)";
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = "#c9c9d4";
        e.currentTarget.style.boxShadow =
          "0 1px 2px rgba(0,0,0,.04) inset";
        props.onBlur?.(e);
      }}
    />
  );
}
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: "#eef2ff",
        padding: "4px 8px",
        borderRadius: 999,
        color: "#222",
        fontSize: 12,
      }}
    >
      {children}
    </span>
  );
}

export function SectionTint({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "federal" | "state" | "city";
}) {
  const bg =
    tone === "federal"
      ? "#f5f7ff"
      : tone === "state"
      ? "#f7fff5"
      : "#fff7f5";
  const border =
    tone === "federal"
      ? "#dfe5ff"
      : tone === "state"
      ? "#dcefdc"
      : "#ffdcd7";

  return (
    <div
      style={{
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 12,
        padding: 10,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Answer input widgets ---------- */

export function NumberAnswer({
  initial,
  onSubmit,
  disabled,
}: {
  initial?: number | null;
  onSubmit: (v: number) => void | Promise<void>;
  disabled?: boolean;
}) {
  const [v, setV] = React.useState<string>(
    initial != null && Number.isFinite(initial) ? String(initial) : ""
  );
  const n = Number(v);
  const valid = Number.isFinite(n) && n >= 0;
  return (
    <Row>
      <TextInput
        type="number"
        min={0}
        value={v}
        onChange={(e: any) => setV(e.currentTarget.value)}
        width={220}
      />
      <Button disabled={disabled} onClick={() => onSubmit(valid ? n : 0)}>
        {disabled ? "Saving…" : "Submit"}
      </Button>
    </Row>
  );
}

export function BoolAnswer({
  initial,
  onSubmit,
  disabled,
}: {
  initial?: boolean | null;
  onSubmit: (v: boolean) => void | Promise<void>;
  disabled?: boolean;
}) {
  const [c, setC] = React.useState<boolean>(Boolean(initial));
  return (
    <Row>
      <label style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
        <input
          type="checkbox"
          checked={c}
          onChange={(e) => setC(e.currentTarget.checked)}
        />
        Yes
      </label>
      <Button disabled={disabled} onClick={() => onSubmit(Boolean(c))}>
        {disabled ? "Saving…" : "Submit"}
      </Button>
    </Row>
  );
}

export function TextAnswer({
  initial,
  onSubmit,
  disabled,
}: {
  initial?: string | null;
  onSubmit: (v: string) => void | Promise<void>;
  disabled?: boolean;
}) {
  const [t, setT] = React.useState<string>(String(initial ?? ""));
  return (
    <Row>
      <TextInput
        type="text"
        value={t}
        onChange={(e) => setT(e.currentTarget.value)}
        width={300}
      />
      <Button disabled={disabled} onClick={() => onSubmit(t ?? "")}>
        {disabled ? "Saving…" : "Submit"}
      </Button>
    </Row>
  );
}