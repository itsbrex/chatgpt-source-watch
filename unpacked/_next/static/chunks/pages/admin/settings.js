(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [577],
  {
    72256: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSP: function () {
            return z;
          },
          default: function () {
            return K;
          },
        });
      var n = s(36112),
        i = s(35017),
        a = s(82256),
        r = s(90166),
        o = s(67558),
        l = s(32062),
        c = s(73582),
        d = s(82473),
        u = s(25494),
        p = s(19841),
        g = s(29124),
        f = s.n(g),
        h = s(70671),
        x = s(32004),
        b = s(94968),
        w = s(33562),
        m = s(4748),
        j = s(81942),
        S = s(35250);
      function y(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, n);
        }
        return s;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(s), !0).forEach(function (t) {
                (0, n.Z)(e, t, s[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
              : y(Object(s)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(s, t)
                  );
                });
        }
        return e;
      }
      function O(e) {
        var t,
          s = e.conversationTTL,
          n = (0, h.Z)();
        return (
          (t =
            null === s
              ? n.formatMessage(Z.retentionInfinite)
              : 7776e3 === s
                ? n.formatMessage(Z.retentionNinetyDays)
                : 31536e3 === s
                  ? n.formatMessage(Z.retentionOneYear)
                  : n.formatMessage(Z.retentionCustomDays, {
                      num: Math.floor(s / 86400),
                    })),
          (0, S.jsxs)(j.vi, {
            children: [
              (0, S.jsx)("p", {
                className: "inline-flex items-center text-base",
                children: (0, S.jsx)(x.Z, v({}, Z.conversationRetention)),
              }),
              (0, S.jsx)(r.u, {
                label: n.formatMessage(Z.retentionSettingTooltip),
                children: t,
              }),
            ],
          })
        );
      }
      function k(e) {
        var t = e.title,
          s = e.description,
          n = e.children,
          i = e.upsellEnterprise,
          a = void 0 !== i && i;
        return (0, S.jsx)(r.E, {
          label: (0, S.jsx)(x.Z, v({}, Z.enterpriseRequiredMessage)),
          side: "top",
          sideOffset: 4,
          disabled: !a,
          className: "max-w-xl",
          children: (0, S.jsxs)(j.i9, {
            className: (0, p.default)(a && "text-token-text-tertiary"),
            children: [
              (0, S.jsxs)(j.A4, {
                className: "flex items-center gap-3",
                children: [
                  (0, S.jsx)(x.Z, v({}, t)),
                  a &&
                    (0, S.jsx)("span", {
                      className:
                        "rounded-xl bg-token-surface-tertiary px-2 pb-0.5 text-sm",
                      children: (0, S.jsx)(x.Z, v({}, Z.enterpriseUpsellPill)),
                    }),
                ],
              }),
              s && (0, S.jsx)(j.Li, { children: (0, S.jsx)(x.Z, v({}, s)) }),
              n,
            ],
          }),
        });
      }
      function T(e) {
        var t,
          s = e.workspaceId,
          n = e.label,
          i = e.setting,
          a = e.defaultValue,
          r = e.values,
          o = e.disabled,
          c = (0, h.Z)(),
          p = (0, d.NL)(),
          g = (0, u.D)({
            mutationFn: function (e) {
              var t = e.setting,
                n = e.value;
              return l.ZP.setWorkspaceShareSetting(s, t, n);
            },
            onSettled: function () {
              p.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: function () {
              m.m.danger(c.formatMessage(Z.featureSettingsUpdateFailed));
            },
          }),
          f = g.variables,
          b = g.mutate;
        return (0, S.jsxs)(j.vi, {
          children: [
            (0, S.jsx)("p", {
              className: "text-md inline-flex items-center",
              children: (0, S.jsx)(x.Z, v({}, n)),
            }),
            (0, S.jsxs)(w.Z.Root, {
              defaultValue:
                null !== (t = null == f ? void 0 : f.value) && void 0 !== t
                  ? t
                  : a,
              onValueChange: function (e) {
                b({ setting: i, value: e });
              },
              disabled: void 0 !== o && o,
              children: [
                (0, S.jsxs)(w.Z.Trigger, {
                  className: "text-md focus-visible:border-none",
                  children: [
                    (0, S.jsx)(w.Z.Value, {}),
                    (0, S.jsx)(w.Z.Icon, {}),
                  ],
                }),
                (0, S.jsx)(w.Z.Portal, {
                  children: (0, S.jsx)(w.Z.Content, {
                    children: r.map(function (e, t) {
                      return (0, S.jsx)(
                        w.Z.Item,
                        {
                          className: "text-md",
                          value: e.value,
                          children: (0, S.jsx)(x.Z, v({}, e.display)),
                        },
                        t
                      );
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function P(e) {
        var t = e.workspaceId,
          s = e.data,
          n = (0, c.ec)(c.F_.isTeamPlan);
        return (0, S.jsxs)(j.$V, {
          children: [
            n && (0, S.jsx)(j.W8, {}),
            (0, S.jsx)(k, {
              title: Z.sharingSettingsTitle,
              upsellEnterprise: n,
              children: (0, S.jsx)(j.qQ, {
                children: (0, S.jsx)(T, {
                  workspaceId: t,
                  label: Z.chatSharingTitle,
                  setting: a.bb.CHAT_SHARE_SETTINGS,
                  disabled: n,
                  defaultValue: s.share_settings.chat_share_setting,
                  values: [
                    {
                      display: Z.workspaceMembersOnlySelect,
                      value: a.Gz.WORKSPACE_ONLY,
                    },
                    { display: Z.noOneSelect, value: a.Gz.NO_ONE },
                  ],
                }),
              }),
            }),
            (0, S.jsx)(k, {
              title: Z.retentionPolicyTitle,
              description: Z.retentionChange,
              upsellEnterprise: n,
              children: (0, S.jsx)(O, { conversationTTL: s.conversation_ttl }),
            }),
          ],
        });
      }
      function M(e) {
        var t = e.currentWorkspaceId,
          s = (0, o.C)(t),
          n = s.data,
          a = s.isLoading,
          r = (0, h.Z)();
        return (0, S.jsxs)(S.Fragment, {
          children: [
            (0, S.jsx)(f(), {
              children: (0, S.jsx)("title", {
                children: r.formatMessage(Z.title),
              }),
            }),
            (0, S.jsx)(i.yG, { title: r.formatMessage(Z.title) }),
            (0, S.jsx)(i.hb, {
              showSpinner: a,
              children:
                void 0 === n
                  ? null
                  : (0, S.jsx)(P, { workspaceId: t, data: n }),
            }),
          ],
        });
      }
      var Z = (0, b.vU)({
          title: { id: "workspaceSettings.title", defaultMessage: "Settings" },
          retentionPolicyTitle: {
            id: "workspaceSettings.retentionPolicyTitle",
            defaultMessage: "Retention policy",
          },
          sharingSettingsTitle: {
            id: "workspaceSettings.sharingSettingsTitle",
            defaultMessage: "Sharing",
          },
          chatSharingTitle: {
            id: "workspaceSettings.chatSharingTitle",
            defaultMessage: "Chats can be shared with...",
          },
          workspaceMembersOnlySelect: {
            id: "workspaceSettings.workspaceMembersOnlySelect",
            defaultMessage: "Workspace members only",
          },
          noOneSelect: {
            id: "workspaceSettings.noOneSelect",
            defaultMessage: "No one",
          },
          featureSettingsUpdateFailed: {
            id: "workspaceSettings.featureSettingsUpdateFailed",
            defaultMessage: "Failed to update feature setting",
          },
          conversationRetention: {
            id: "workspaceSettings.conversationRetention",
            defaultMessage: "Chat retention",
          },
          retentionInfinite: {
            id: "workspaceSettings.retentionInfinite",
            defaultMessage: "Infinite",
          },
          retentionNinetyDays: {
            id: "workspaceSettings.retentionNinetyDays",
            defaultMessage: "90 days",
          },
          retentionOneYear: {
            id: "workspaceSettings.retentionOneYear",
            defaultMessage: "1 year",
          },
          retentionCustomDays: {
            id: "workspaceSettings.retentionCustomDays",
            defaultMessage: "{num} days",
          },
          retentionChange: {
            id: "workspaceSettings.retentionChange",
            defaultMessage:
              "Contact your account manager to change this setting.",
          },
          enterpriseUpsellPill: {
            id: "workspaceSettings.enterpriseUpsellPill",
            defaultMessage: "Enterprise",
          },
          retentionSettingTooltip: {
            id: "workspaceSettings.retentionSettingTooltip",
            defaultMessage:
              "Contact your account manager to change this setting",
          },
          enterpriseRequiredMessage: {
            id: "workspaceSettings.enterpriseRequiredMessage",
            defaultMessage:
              "Only workspaces with the Enterprise plan can change these settings",
          },
        }),
        N = s(14972),
        _ = s(46001);
      function C(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, n);
        }
        return s;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(s), !0).forEach(function (t) {
                (0, n.Z)(e, t, s[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
              : C(Object(s)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(s, t)
                  );
                });
        }
        return e;
      }
      function G() {
        return (0, S.jsx)(N.aU, {
          className: "icon-sm ml-1 text-token-text-tertiary",
        });
      }
      function I(e) {
        var t,
          s = e.conversationTTL,
          n = (0, h.Z)();
        return (
          (t =
            null === s
              ? n.formatMessage(U.retentionInfinite)
              : 7776e3 === s
                ? n.formatMessage(U.retentionNinetyDays)
                : 31536e3 === s
                  ? n.formatMessage(U.retentionOneYear)
                  : n.formatMessage(U.retentionCustomDays, {
                      num: Math.floor(s / 86400),
                    })),
          (0, S.jsxs)(j.vi, {
            children: [
              (0, S.jsx)("p", {
                className: "inline-flex items-center text-base",
                children: (0, S.jsx)(x.Z, E({}, U.conversationRetention)),
              }),
              (0, S.jsx)(r.u, {
                label: n.formatMessage(U.retentionSettingTooltip),
                children: t,
              }),
            ],
          })
        );
      }
      function A(e) {
        var t = e.title,
          s = e.description,
          n = e.children,
          i = e.upsellEnterprise,
          a = void 0 !== i && i;
        return (0, S.jsx)(r.E, {
          label: (0, S.jsx)(x.Z, E({}, U.enterpriseRequiredMessage)),
          side: "top",
          sideOffset: 4,
          disabled: !a,
          className: "max-w-xl",
          children: (0, S.jsxs)(j.i9, {
            className: (0, p.default)(a && "text-token-text-tertiary"),
            children: [
              (0, S.jsxs)(j.A4, {
                className: "flex items-center gap-3",
                children: [
                  (0, S.jsx)(x.Z, E({}, t)),
                  a &&
                    (0, S.jsx)("span", {
                      className:
                        "rounded-xl bg-token-surface-tertiary px-2 pb-0.5 text-sm",
                      children: (0, S.jsx)(x.Z, E({}, U.enterpriseUpsellPill)),
                    }),
                ],
              }),
              s && (0, S.jsx)(j.Li, { children: (0, S.jsx)(x.Z, E({}, s)) }),
              n,
            ],
          }),
        });
      }
      function D(e) {
        var t,
          s = e.workspaceId,
          n = e.label,
          i = e.setting,
          a = e.defaultValue,
          r = e.values,
          o = e.disabled,
          c = (0, h.Z)(),
          p = (0, d.NL)(),
          g = (0, u.D)({
            mutationFn: function (e) {
              var t = e.setting,
                n = e.value;
              return l.ZP.setWorkspaceShareSetting(s, t, n);
            },
            onSettled: function () {
              p.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: function () {
              m.m.danger(c.formatMessage(U.featureSettingsUpdateFailed));
            },
          }),
          f = g.variables,
          b = g.mutate;
        return (0, S.jsxs)(j.vi, {
          children: [
            (0, S.jsx)("p", {
              className: "text-md inline-flex items-center",
              children: (0, S.jsx)(x.Z, E({}, n)),
            }),
            (0, S.jsxs)(w.Z.Root, {
              defaultValue:
                null !== (t = null == f ? void 0 : f.value) && void 0 !== t
                  ? t
                  : a,
              onValueChange: function (e) {
                b({ setting: i, value: e });
              },
              disabled: void 0 !== o && o,
              children: [
                (0, S.jsxs)(w.Z.Trigger, {
                  className: "text-md focus-visible:border-none",
                  children: [
                    (0, S.jsx)(w.Z.Value, {}),
                    (0, S.jsx)(w.Z.Icon, {}),
                  ],
                }),
                (0, S.jsx)(w.Z.Portal, {
                  children: (0, S.jsx)(w.Z.Content, {
                    children: r.map(function (e, t) {
                      return (0, S.jsx)(
                        w.Z.Item,
                        {
                          className: "text-md",
                          value: e.value,
                          children: (0, S.jsx)(x.Z, E({}, e.display)),
                        },
                        t
                      );
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function L(e) {
        var t,
          s = e.workspaceId,
          n = e.value,
          i = (0, h.Z)(),
          r = (0, d.NL)(),
          o = (0, u.D)({
            mutationFn: function (e) {
              var t = e.value;
              return l.ZP.setWorkspaceThirdPartyGPTSetting(s, t);
            },
            onSettled: function () {
              r.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: function () {
              m.m.danger(i.formatMessage(U.featureSettingsUpdateFailed));
            },
          }),
          c = o.variables,
          p = o.mutate;
        return (0, S.jsxs)(w.Z.Root, {
          defaultValue:
            null !== (t = null == c ? void 0 : c.value) && void 0 !== t ? t : n,
          onValueChange: function (e) {
            p({ value: e });
          },
          children: [
            (0, S.jsxs)(w.Z.Trigger, {
              className:
                "border border-token-border-light text-base focus-visible:border-token-border-light",
              children: [(0, S.jsx)(w.Z.Value, {}), (0, S.jsx)(w.Z.Icon, {})],
            }),
            (0, S.jsx)(w.Z.Portal, {
              children: (0, S.jsxs)(w.Z.Content, {
                children: [
                  (0, S.jsx)(w.Z.Item, {
                    className: "text-base",
                    value: a.NN.ALLOW_ALL,
                    children: (0, S.jsx)(x.Z, E({}, U.allowAllOption)),
                  }),
                  (0, S.jsx)(w.Z.Item, {
                    className: "text-base",
                    value: a.NN.ALLOW_NONE,
                    children: (0, S.jsx)(x.Z, E({}, U.dontAllowOption)),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function R(e) {
        var t,
          s = e.workspaceId,
          n = e.label,
          i = e.feature,
          a = e.value,
          o = e.tooltip,
          c = e.disabled,
          p = (0, h.Z)(),
          g = (0, d.NL)(),
          f = (0, u.D)({
            mutationFn: function (e) {
              var t = e.feature,
                n = e.enabled;
              return l.ZP.setWorkspaceBetaFeature(s, t, n);
            },
            onSettled: function () {
              g.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: function () {
              m.m.danger(p.formatMessage(U.featureSettingsUpdateFailed));
            },
          }),
          b = f.variables,
          w = f.mutate;
        return (0, S.jsxs)(j.vi, {
          children: [
            (0, S.jsxs)("p", {
              className: "text-md inline-flex items-center",
              children: [
                (0, S.jsx)(x.Z, E({}, n)),
                o &&
                  (0, S.jsx)(r.u, {
                    sideOffset: 4,
                    interactive: !0,
                    delayDuration: 0,
                    label: (0, S.jsx)(x.Z, E({}, o)),
                    side: "top",
                    children: (0, S.jsx)(G, {}),
                  }),
              ],
            }),
            (0, S.jsx)(_.oC, {
              label: "",
              disabled: void 0 !== c && c,
              enabled:
                null !== (t = null == b ? void 0 : b.enabled) && void 0 !== t
                  ? t
                  : a,
              onChange: function (e) {
                w({ feature: i, enabled: e });
              },
            }),
          ],
        });
      }
      function W(e) {
        var t = e.workspaceId,
          s = e.data,
          n = (0, c.ec)(c.F_.isTeamPlan),
          i = (0, S.jsxs)(A, {
            title: U.thirdPartyGPTsTitle,
            children: [
              (0, S.jsx)("p", {
                className: "text-md flex grow items-center",
                children: (0, S.jsx)(x.Z, E({}, U.thirdPartyGPTsDescription)),
              }),
              (0, S.jsx)("div", {
                children: (0, S.jsx)(L, {
                  workspaceId: t,
                  value: s.allow_third_party_gpts,
                }),
              }),
            ],
          });
        return (0, S.jsxs)(j.$V, {
          children: [
            n && i,
            n && (0, S.jsx)(j.W8, {}),
            (0, S.jsx)(A, {
              title: U.sharingSettingsTitle,
              upsellEnterprise: n,
              children: (0, S.jsxs)(j.qQ, {
                children: [
                  (0, S.jsx)(D, {
                    workspaceId: t,
                    label: U.chatSharingTitle,
                    setting: a.bb.CHAT_SHARE_SETTINGS,
                    disabled: n,
                    defaultValue: s.share_settings.chat_share_setting,
                    values: [
                      {
                        display: U.workspaceMembersOnlySelect,
                        value: a.Gz.WORKSPACE_ONLY,
                      },
                      { display: U.noOneSelect, value: a.Gz.NO_ONE },
                    ],
                  }),
                  (0, S.jsx)(D, {
                    workspaceId: t,
                    label: U.gptSharingTitle,
                    disabled: n,
                    setting: a.bb.GPT_SHARE_SETTINGS,
                    defaultValue: s.share_settings.gpt_share_setting,
                    values: [
                      { display: U.anyOneSelect, value: a.Gz.ANYONE },
                      {
                        display: U.workspaceMembersOnlySelect,
                        value: a.Gz.WORKSPACE_ONLY,
                      },
                      { display: U.noOneSelect, value: a.Gz.NO_ONE },
                    ],
                  }),
                ],
              }),
            }),
            (0, S.jsx)(A, {
              title: U.workspaceGPTsTitle,
              description: U.workspaceGPTsDescription,
              upsellEnterprise: n,
              children: (0, S.jsxs)(j.qQ, {
                children: [
                  (0, S.jsx)(R, {
                    label: U.browseOptionTitle,
                    feature: a.Nh.BROWSING,
                    value: s.beta_settings.browsing,
                    workspaceId: t,
                    tooltip: U.browseTooltip,
                    disabled: n,
                  }),
                  (0, S.jsx)(R, {
                    label: U.customActionsOptionTitle,
                    feature: a.Nh.WORKSPACE_GPT_CUSTOM_ACTIONS,
                    value: s.beta_settings.workspace_gpt_custom_actions,
                    workspaceId: t,
                    tooltip: U.customActionsTooltip,
                    disabled: n,
                  }),
                  (0, S.jsx)(R, {
                    label: U.pluginsOptionTitle,
                    feature: a.Nh.PLUGINS,
                    value: s.beta_settings.plugins,
                    workspaceId: t,
                    tooltip: U.pluginsTooltip,
                    disabled: n,
                  }),
                ],
              }),
            }),
            !n && i,
            (0, S.jsx)(A, {
              title: U.retentionPolicyTitle,
              description: U.retentionChange,
              upsellEnterprise: n,
              children: (0, S.jsx)(I, { conversationTTL: s.conversation_ttl }),
            }),
          ],
        });
      }
      function F(e) {
        var t = e.currentWorkspaceId,
          s = (0, o.C)(t),
          n = s.data,
          a = s.isLoading,
          r = (0, h.Z)();
        return (0, S.jsxs)(S.Fragment, {
          children: [
            (0, S.jsx)(f(), {
              children: (0, S.jsx)("title", {
                children: r.formatMessage(U.title),
              }),
            }),
            (0, S.jsx)(i.yG, { title: r.formatMessage(U.title) }),
            (0, S.jsx)(i.hb, {
              showSpinner: a,
              children:
                void 0 === n
                  ? null
                  : (0, S.jsx)(W, { workspaceId: t, data: n }),
            }),
          ],
        });
      }
      var U = (0, b.vU)({
          title: { id: "workspaceSettings.title", defaultMessage: "Settings" },
          allowAllOption: {
            id: "workspaceSettings.allowAllOption",
            defaultMessage: "Allow all",
          },
          dontAllowOption: {
            id: "workspaceSettings.dontAllowOption",
            defaultMessage: "Don't allow",
          },
          retentionPolicyTitle: {
            id: "workspaceSettings.retentionPolicyTitle",
            defaultMessage: "Retention policy",
          },
          thirdPartyGPTsTitle: {
            id: "workspaceSettings.thirdPartyGPTsTitle",
            defaultMessage: "Third-party GPTs",
          },
          thirdPartyGPTsDescription: {
            id: "workspaceSettings.thirdPartyGPTsDescription",
            defaultMessage:
              "Manage whether members can use GPTs created outside your workspace. These GPTs may be able to browse the internet or take custom actions.",
          },
          customActionsTooltip: {
            id: "workspaceSettings.customActionsTooltip",
            defaultMessage:
              "Allow GPTs to use third-party services for tasks such as finding flights. Actions are defined by GPT builders.",
          },
          browseTooltip: {
            id: "workspaceSettings.browseTooltip",
            defaultMessage:
              "Allow ChatGPT and GPTs to browse the internet to answer questions about recent topics and events.",
          },
          pluginsTooltip: {
            id: "workspaceSettings.pluginsTooltip",
            defaultMessage:
              "Allow members to install plugins so ChatGPT can use third-party services for tasks such as finding flights.",
          },
          pluginsOptionTitle: {
            id: "workspaceSettings.pluginsOptionTitle",
            defaultMessage: "Plugins",
          },
          customActionsOptionTitle: {
            id: "workspaceSettings.pluginsOptionTitle.0",
            defaultMessage: "Custom actions",
          },
          browseOptionTitle: {
            id: "workspaceSettings.browseOptionTitle",
            defaultMessage: "Browsing with Bing",
          },
          workspaceGPTsTitle: {
            id: "workspaceSettings.workspaceGPTsTitle",
            defaultMessage: "Workspace GPTs",
          },
          appearanceTitle: {
            id: "workspaceSettings.appearanceTitle",
            defaultMessage: "Appearance",
          },
          sharingSettingsTitle: {
            id: "workspaceSettings.sharingSettingsTitle",
            defaultMessage: "Sharing",
          },
          gptSharingTitle: {
            id: "workspaceSettings.gptSharingTitle",
            defaultMessage: "GPTs can be shared with...",
          },
          chatSharingTitle: {
            id: "workspaceSettings.chatSharingTitle",
            defaultMessage: "Chats can be shared with...",
          },
          workspaceMembersOnlySelect: {
            id: "workspaceSettings.workspaceMembersOnlySelect",
            defaultMessage: "Workspace members only",
          },
          anyOneSelect: {
            id: "workspaceSettings.anyOneSelect",
            defaultMessage: "Anyone",
          },
          noOneSelect: {
            id: "workspaceSettings.noOneSelect",
            defaultMessage: "No one",
          },
          featureSettingsUpdateFailed: {
            id: "workspaceSettings.featureSettingsUpdateFailed",
            defaultMessage: "Failed to update feature setting",
          },
          conversationRetention: {
            id: "workspaceSettings.conversationRetention",
            defaultMessage: "Chat retention",
          },
          retentionInfinite: {
            id: "workspaceSettings.retentionInfinite",
            defaultMessage: "Infinite",
          },
          retentionNinetyDays: {
            id: "workspaceSettings.retentionNinetyDays",
            defaultMessage: "90 days",
          },
          retentionOneYear: {
            id: "workspaceSettings.retentionOneYear",
            defaultMessage: "1 year",
          },
          retentionCustomDays: {
            id: "workspaceSettings.retentionCustomDays",
            defaultMessage: "{num} days",
          },
          retentionChange: {
            id: "workspaceSettings.retentionChange",
            defaultMessage:
              "Contact your account manager to change this setting.",
          },
          workspaceGPTsDescription: {
            id: "workspaceSettings.workspaceGPTsDescription",
            defaultMessage:
              "Manage which capabilities are available for standard ChatGPT and custom GPTs created in your workspace. These settings do not apply to third-party GPTs.",
          },
          enterpriseUpsellPill: {
            id: "workspaceSettings.enterpriseUpsellPill",
            defaultMessage: "Enterprise",
          },
          retentionSettingTooltip: {
            id: "workspaceSettings.retentionSettingTooltip",
            defaultMessage:
              "Contact your account manager to change this setting",
          },
          enterpriseRequiredMessage: {
            id: "workspaceSettings.enterpriseRequiredMessage",
            defaultMessage:
              "Only workspaces with the Enterprise plan can change these settings",
          },
        }),
        V = s(14765);
      function q(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, n);
        }
        return s;
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(s), !0).forEach(function (t) {
                (0, n.Z)(e, t, s[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
              : q(Object(s)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(s, t)
                  );
                });
        }
        return e;
      }
      var z = !0;
      function K(e) {
        var t = (0, V.sB)(V.tz.WorkspaceAllowSpecific),
          s = t.value;
        return t.isLoading
          ? null
          : s
            ? (0, S.jsx)(M, Y({}, e))
            : (0, S.jsx)(F, Y({}, e));
      }
      K.getLayout = function (e) {
        return (0, S.jsx)(i.ZP, {
          mobilePageTitle: "Settings",
          requireAdminPrivileges: !0,
          children: e,
        });
      };
    },
    81942: function (e, t, s) {
      "use strict";
      s.d(t, {
        $V: function () {
          return g;
        },
        A4: function () {
          return f;
        },
        Li: function () {
          return w;
        },
        W8: function () {
          return j;
        },
        i$: function () {
          return h;
        },
        i9: function () {
          return b;
        },
        qQ: function () {
          return x;
        },
        vi: function () {
          return m;
        },
      });
      var n,
        i,
        a,
        r,
        o,
        l,
        c,
        d,
        u = s(90038),
        p = s(21389),
        g = p.Z.div(
          n ||
            (n = (0, u.Z)([
              "text-base text-token-text-primary flex flex-col gap-10 my-10",
            ]))
        ),
        f = p.Z.div(i || (i = (0, u.Z)(["text-xl font-medium"]))),
        h = p.Z.div(a || (a = (0, u.Z)(["text-base font-medium"]))),
        x = p.Z.div(
          r ||
            (r = (0, u.Z)([
              "flex flex-col divide-y divide-token-border-light border-y border-token-border-light",
            ]))
        ),
        b = p.Z.div(
          o ||
            (o = (0, u.Z)([
              "max-w-xl flex flex-col gap-3 w-full m-auto md:m-0",
            ]))
        ),
        w = p.Z.div(l || (l = (0, u.Z)(["text-sm"]))),
        m = p.Z.div(c || (c = (0, u.Z)(["flex justify-between py-4 gap-4"]))),
        j = p.Z.hr(d || (d = (0, u.Z)(["max-w-xl border-token-border-light"])));
    },
    16118: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/settings",
        function () {
          return s(72256);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [5017, 9774, 2888, 179], function () {
      return e((e.s = 16118));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=settings-608051d3daa617bc.js.map
